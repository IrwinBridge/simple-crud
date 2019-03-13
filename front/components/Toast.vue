<template>
    <div v-if="isVisible" class="st-toast">{{ message }}</div>
</template>

<script>
import EventBus from '../EventBus.js';

export default {
    components: {
        name: 'toast'
    },
    data() {
        return {
            isVisible: false,
            message: ''
        };
    },
    mounted() {
        EventBus.$on('show-toast', (message) => {
            this.showToast(message);
        });
    },
    methods: {
        showToast(message) {
            this.message = message;
            this.isVisible = true;
            setTimeout(this.closeToast, 3000);
        },
        closeToast() {
            this.message = '';
            this.isVisible = false;
        }
    }
}
</script>


<style>
.st-toast {
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
}
</style>

