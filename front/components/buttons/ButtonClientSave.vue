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
            client: {},
            errors: {}
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
            if (this.isFormValid(this.client)) {
                const uri = '/api/clients/' + this.$props.id;
                delete this.client._id;
                this.axios.put(uri, this.client)
                .then((res) => {
                    console.log(res.data);
                    EventBus.$emit('clients-changed');
                    EventBus.$emit('close-modal');
                    EventBus.$emit('show-toast', 'Client was successfully updated');
                })
                .catch((err) => {
                    console.log(err);
                    EventBus.$emit('form-errors', {
                        name: '',
                        email: 'Client with this email already exists',
                        phone: ''
                    });
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