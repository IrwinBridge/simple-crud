<template>
    <div id="app" class="container pt-3">
        <div id="header" class="border bg-secondary text-white p-3 d-flex justify-content-between">
            <h3>Clients</h3>
            <button-client-new></button-client-new>
        </div>
        <table-clients></table-clients>
        <modal-client></modal-client>
    </div>
</template>

<script>
import ButtonClientNew from './components/buttons/ButtonClientNew.vue';
import TableClients from './components/TableClients.vue';
import ModalClient from './components/ModalClient.vue';

export default {
    components: {
        ButtonClientNew,
        TableClients,
        ModalClient
    }
};
</script>