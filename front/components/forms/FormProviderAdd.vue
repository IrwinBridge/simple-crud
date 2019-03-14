<template>
    <form v-on:submit.prevent="addProvider">
        <div class="form-group">
            <label>Providers:</label>
            <div v-if="error.length" class="alert alert-danger" role="alert">{{ error }}</div>
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
            newProvider: {},
            error: ''
        };
    },
    methods: {
        addProvider() {
            const uri = '/api/providers';
            this.error = '';
            this.axios.post(uri, this.newProvider)
            .then((res) => {
                console.log(res.data);
                EventBus.$emit('providers-changed');
                this.newProvider = {};
            })
            .catch((err) => {
                this.error = 'Provider with this name already exists';
            });
        }
    }
};
</script>