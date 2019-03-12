<template>
    <button type="button" class="btn btn-light" v-on:click="showModalEdit(id)">Edit</button>
</template>

<script>
import EventBus from '../../EventBus.js';

export default {
    components: {
        name: 'button-client-edit'
    },
    props: {
        id: String
    },
    methods: {
        showModalEdit(id) {
            EventBus.$emit('show-modal', id);
        }
    }
};
</script>