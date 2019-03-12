<template>
    <button type="button" class="btn btn-light" @click="showModal()">New Client</button>
</template>

<script>
import EventBus from '../../EventBus.js';

export default {
    components: {
        name: 'button-client-new'
    },
    methods: {
        showModal() {
            EventBus.$emit('show-modal', null);
        }
    }
};
</script>