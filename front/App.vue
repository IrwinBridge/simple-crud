<template>
    <div id="app" class="container pt-3">
        <div id="header" class="bg-white header-border header-text px-4 py-4 d-flex justify-content-between">
            <h3 class="m-0">Clients</h3>
            <button-client-new></button-client-new>
        </div>
        <table-clients></table-clients>
        <modal-client></modal-client>
        <toast></toast>
    </div>
</template>

<script>
import ButtonClientNew from './components/buttons/ButtonClientNew.vue';
import TableClients from './components/TableClients.vue';
import ModalClient from './components/ModalClient.vue';
import Toast from './components/Toast.vue';

export default {
    components: {
        ButtonClientNew,
        TableClients,
        ModalClient,
        Toast
    }
};
</script>

<style>
.header-border {
    border-top: 2px solid #d9e4ff;
    border-left: 2px solid #d9e4ff;
    border-right: 2px solid #d9e4ff;
}
.header-text {
    color: #3473ff;
}
</style>
