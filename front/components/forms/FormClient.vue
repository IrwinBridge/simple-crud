<template>
    <form>
        <div class="form-group">
            <label>Name:</label>
            <div v-if="errors.name.length" class="alert alert-danger" role="alert">{{ errors.name }}</div>
            <input type="text" class="form-control" v-model="client.name"/>
        </div>
        <div class="form-group">
            <label>Email:</label>
            <div v-if="errors.email.length" class="alert alert-danger" role="alert">{{ errors.email }}</div>
            <input type="text" class="form-control" v-model="client.email"/>
        </div>
        <div class="form-group">
            <label>Phone:</label>
            <div v-if="errors.phone.length" class="alert alert-danger" role="alert">{{ errors.phone }}</div>
            <input type="text" class="form-control" v-model="client.phone"/>
        </div>
        <form-provider-add></form-provider-add>
        <provider-list :checkedProviders="clientProviders"></provider-list>
    </form>
</template>

<script>
import FormProviderAdd from './FormProviderAdd.vue';
import ProviderList from '../ProviderList.vue';
import EventBus from '../../EventBus.js';

export default {
    components: {
        name: 'form-client',
        FormProviderAdd,
        ProviderList
    },
    props: {
        id: String
    },
    data() {
        return {
            client: {
                name: '',
                email: '',
                phone: '',
                providers: []
            },
            clientProviders: [],
            errors: {
                name: '',
                email: '',
                phone: ''
            }
        };
    },
    created() {
    },
    mounted() {
        this.getClient(this.$props.id);
        EventBus
        .$on('client-providers-changed', (providers) => {
            this.client.providers = providers;
        })
        .$on('form-errors', (errors) => {
            this.errors = errors;
        });
    },
    methods: {
        getClient(id) {
            if (id != null) {
                const uri = 'http://localhost:3000/api/clients/' + id;
                this.axios.get(uri).then((res) => {
                    this.client = res.data;
                    this.clientProviders = this.client.providers.map((item) => { return item._id });
                });
            }
        }
    },
    watch: {
        client: {
            deep: true,
            handler(newval, oldval) {
                EventBus.$emit('client-changed', newval);
            }
        }
    }
}
</script>
