<template>
    <form v-on:submit.prevent="addProvider">
        <div class="form-group">
            <label>Providers:</label>
            <div class="d-flex justify-content-between">
                <input type="text" class="form-control" v-model="newProvider.name"/>
                <input type="submit" class="btn btn-primary ml-2" value="Add Provider"/>
            </div>
        </div>
    </form>
</template>

<script>
import EventBus from '../../EventBus.js';

export default {
    components: {
        name: 'form-provider-add'
    },
    data() {
        return {
            newProvider: {}
        };
    },
    methods: {
        addProvider() {
            const uri = 'http://localhost:3000/api/providers';
            this.axios.post(uri, this.newProvider).then((res) => {
                console.log(res.data);
                EventBus.$emit('providers-changed');
                this.newProvider = {};
            });
        }
    }
};
</script>