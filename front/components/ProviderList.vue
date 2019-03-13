<template>
    <div class="d-inline-flex flex-column border rounded p-3">
        <div class="form-check" v-for="provider in providers" :key="provider._id">
            <div v-if="providerForChange._id === provider._id">
                <form class="form-inline" v-on:submit.prevent="editProvider()">
                    <input type="text" class="form-control form-control-sm" v-model="providerForChange.name">
                    <input type="submit" class="btn btn-sm btn-primary ml-1" value="Save Provider">
                </form>
            </div>
            <div class="d-flex justify-content-between" v-else>
                <div>
                    <input type="checkbox" class="form-check-input" :value="provider._id"
                            v-model="clientProviders" @change="updateClientProviders()">
                    <label class="form-check-label">{{ provider.name }}</label>
                </div>
                <div class="ml-3">
                    <button type="button" class="btn bg-white btn-sm" @click="providerForChange = provider">
                        <icon-pencil></icon-pencil>
                    </button>
                    <button type="button" class="btn bg-white btn-sm" @click="deleteProvider(provider._id)">
                        <icon-trash></icon-trash>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IconPencil from './icons/IconPencil.vue';
import IconTrash from './icons/IconTrash.vue';
import EventBus from '../EventBus.js';

export default {
    components: {
        name: 'provider-list',
        IconPencil,
        IconTrash
    },
    props: [
        'checkedProviders'
    ],
    data() {
        return {
            providerForChange: {},
            providers: [],
            clientProviders: []
        };
    },
    created: function() {
        this.fetchProviders();
    },
    mounted() {
        EventBus.$on('providers-changed', () => {
            this.fetchProviders();
        });
    },
    methods: {
        fetchProviders() {
            const uri = 'http://localhost:3000/api/providers';
            this.axios.get(uri).then((res) => {
                this.providers = res.data;
            });
        },
        editProvider() {
            const _id = this.providerForChange._id;
            const uri = 'http://localhost:3000/api/providers/' + _id
            delete this.providerForChange._id;
            this.axios.put(uri, this.providerForChange).then((res) => {
                console.log(res.data);
                EventBus.$emit('providers-changed');
                EventBus.$emit('clients-changed');
                this.providerForChange = {};
            }).catch((err) => {
                console.error(err);
                this.providerForChange._id = _id;
            });
        },
        deleteProvider(id) {
            const uri = 'http://localhost:3000/api/providers/' + id;
            this.axios.delete(uri).then((res) => {
                console.log(res.data);
                this.fetchProviders();
            });
        },
        updateClientProviders() {
            EventBus.$emit('client-providers-changed', this.clientProviders);
        }
    },
    watch: {
        checkedProviders: {
            deep: true,
            handler(newval, oldval) {
                this.clientProviders = newval;
            }
        }
    }
};
</script>