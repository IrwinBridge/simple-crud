<template>
    <button type="button" class="btn btn-primary" @click="saveClient()">Save Client</button>
</template>

<script>
import EventBus from '../../EventBus.js';

export default {
    components: {
        name: 'button-client-save'
    },
    props: {
        id: String
    },
    data() {
        return {
            client: {}
        };
    },
    mounted() {
        EventBus
        .$on('client-changed', (client) => {
            this.client = client;
        })
        .$on('client-providers-changed', (providers) => {
            this.client.providers = providers;
        });
    },
    methods: {
        saveClient() {
            const uri = 'http://localhost:3000/api/clients/' + this.$props.id;
            delete this.client._id;
            this.axios.put(uri, this.client).then((res) => {
                console.log(res.data);
                EventBus.$emit('clients-changed');
                EventBus.$emit('close-modal');
            });
        }
    }
};
</script>