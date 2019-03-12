<template>
    <div v-if="showModal">
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 v-if="client_id == null" class="modal-title">New Client</h5>
                                <h5 v-else class="modal-title">Edit Client</h5>
                                <button type="button" class="close" aria-label="Close" @click="showModal = false">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form-client :id="client_id"></form-client>
                            </div>
                            <div class="modal-footer d-flex justify-content-between">
                                <button-client-delete v-if="client_id != null" :id="client_id"></button-client-delete>
                                <div>
                                    <button-modal-close></button-modal-close>
                                    <button-client-add v-if="client_id == null"></button-client-add>
                                    <button-client-save v-else :id="client_id"></button-client-save>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import FormClient from './forms/FormClient.vue';
import ButtonClientDelete from './buttons/ButtonClientDelete.vue';
import ButtonModalClose from './buttons/ButtonModalClose.vue';
import ButtonClientAdd from './buttons/ButtonClientAdd.vue';
import ButtonClientSave from './buttons/ButtonClientSave.vue';
import EventBus from '../EventBus.js';

export default {
    components: {
        name: 'modal-client',
        FormClient,
        ButtonClientDelete,
        ButtonModalClose,
        ButtonClientAdd,
        ButtonClientSave
    },
    data() {
        return {
            showModal: false,
            client_id: ''
        };
    },
    mounted() {
        EventBus
        .$on('show-modal', (id) => {
            this.client_id = id;
            this.showModal = true;
        })
        .$on('close-modal', () => {
            this.showModal = false;
        });
    }
};
</script>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}
</style>