<template>
    <div class="table-responsive">
        <table class="table table-bordered table-hover">
            <thead class="thead-light">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Providers</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="client in clients" :key="client._id">
                    <td class="align-middle">{{ client.name }}</td>
                    <td class="align-middle">{{ client.email }}</td>
                    <td class="align-middle">{{ client.phone }}</td>
                    <td class="align-middle">{{ client.providers.map(e => {
                                    return e.name;
                            }).join(', ')
                        }}
                    </td>
                    <td class="d-flex justify-content-center">
                        <button-client-edit :id="client._id" class="mr-3"></button-client-edit>
                        <button-client-delete :id="client._id"></button-client-delete>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ButtonClientEdit from './buttons/ButtonClientEdit.vue';
import ButtonClientDelete from './buttons/ButtonClientDelete.vue';
import EventBus from '../EventBus.js';

export default {
    components: {
        name: 'table-clients',
        ButtonClientEdit,
        ButtonClientDelete
    },
    data() {
        return {
            clients: []
        }
    },
    created() {
        this.fetchClients();
    },
    mounted() {
        EventBus.$on('clients-changed', () => {
            this.fetchClients();
        });
    },
    methods: {
        fetchClients() {
            const uri = 'http://localhost:3000/api/clients';
            this.axios.get(uri).then((res) => {
                this.clients = res.data;
            });
        }
    }
};
</script>