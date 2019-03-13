const mongoose = require('mongoose');

const providersSchema = new mongoose.Schema({
    name: { type : String, unique : true, required : true, dropDups: true }
}, {versionKey: false});

module.exports = mongoose.model('Provider', providersSchema);