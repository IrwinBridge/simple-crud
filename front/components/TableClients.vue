<template>
    <table class="table table-responsive table-bordered table-hover">
        <thead class="thead-light">
            <tr>
                <th class="pl-4">Name</th>
                <th class="pl-4">Email</th>
                <th class="pl-4">Phone</th>
                <th class="pl-4">Providers</th>
                <th class="fit"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="client in clients" :key="client._id">
                <td class="align-middle pl-4 py-3">{{ client.name }}</td>
                <td class="align-middle pl-4 py-3">{{ client.email }}</td>
                <td class="align-middle pl-4 py-3">{{ client.phone }}</td>
                <td class="align-middle pl-4 py-3">{{ client.providers.map(e => {
                                return e.name;
                        }).join(', ')
                    }}
                </td>
                <td class="fit px-4 py-3">
                    <div>
                        <button-client-edit :id="client._id" class="mr-2"></button-client-edit>
                        <button-client-delete :id="client._id" class="ml-1"></button-client-delete>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
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
            const uri = '/api/clients';
            this.axios.get(uri).then((res) => {
                this.clients = res.data;
            });
        }
    }
};
</script>

<style>
.fit {
    white-space: nowrap;
    width: 1%;
}
</style>
