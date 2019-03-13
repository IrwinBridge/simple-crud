<template>
    <button type="button" class="btn btn-outline-secondary btn-color" v-on:click="showModalEdit(id)">Edit</button>
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

<style>
.btn-color {
    border-color: #d9e4ff !important;
}
</style>
