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
            client: {},
            errors: {}
        };
    },
    created() {
        this.client = {
            name: '',
            email: '',
            phone: '',
            providers: []
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
            if (this.isFormValid(this.client)) {
                const uri = 'http://localhost:3000/api/clients';
                this.axios.post(uri, this.client).then((res) => {
                    console.log(res.data);
                    EventBus.$emit('clients-changed');
                    EventBus.$emit('close-modal');
                    this.client = {};
                    EventBus.$emit('show-toast', 'Client was successfully created');
                });
            } else
                EventBus.$emit('form-errors', this.errors);
        },
        isFormValid(client) {
            this.errors = {
                name: '',
                email: '',
                phone: ''
            };
            let error = true;
            if (!client.name.length || client.name.length < 3) {
                this.errors.name = 'Name is required and must be at least 3 characters long';
                error = false;
            }
            if (!client.email.length || client.email.length < 5 || !client.email.includes('@')) {
                this.errors.email = 'Email is required and must be valid';
                error = false;
            }
            if (!client.phone.length || client.phone.length < 8) {
                this.errors.phone = 'Phone is required and must be at least 8 digits long';
                error = false;
            }
            return error;
        }
    }
};
</script>