<template>
    <button type="button" class="btn btn-primary" @click="addClient()">Add Client</button>
</template>

<script>
import EventBus from '../../EventBus.js';

export default {
    components: {
        name: 'button-client-add'
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
        addClient() {
            const uri = 'http://localhost:3000/api/clients';
            this.axios.post(uri, this.client).then((res) => {
                console.log(res.data);
                EventBus.$emit('clients-changed');
                EventBus.$emit('close-modal');
                this.client = {};
            });
        }
    }
};
</script>