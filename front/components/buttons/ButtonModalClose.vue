<template>
    <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
</template>

<script>
import EventBus from '../../EventBus.js';

export default {
    components: {
        name: 'button-modal-close'
    },
    methods: {
        closeModal() {
            EventBus.$emit('close-modal');
        }
    }
}
</script>