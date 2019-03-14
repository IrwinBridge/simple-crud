const mongoose = require('mongoose');

const providersSchema = new mongoose.Schema({
    name: { type : String, unique : true, required : true}
});

module.exports = mongoose.model('Provider', providersSchema);