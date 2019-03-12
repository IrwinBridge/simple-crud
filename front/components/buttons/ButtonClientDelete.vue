<template>
    <button type="button" class="btn btn-danger" v-on:click="deleteClient(id)">Delete</button>
</template>

<script>
import EventBus from '../../EventBus.js';

export default {
    components: {
        name: 'button-client-delete'
    },
    props: {
        id: String
    },
    methods: {
        deleteClient(id) {
            const uri = 'http://localhost:3000/api/clients/' + id;
            this.axios.delete(uri).then((res) => {
                console.log(res.data);
                EventBus.$emit('clients-changed');
                EventBus.$emit('close-modal');
            });
        }
    }
};
</script>