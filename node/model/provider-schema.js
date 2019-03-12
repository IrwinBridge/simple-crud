const mongoose = require('mongoose');

const providersSchema = new mongoose.Schema({
    name: String
}, {versionKey: false});

module.exports = mongoose.model('Provider', providersSchema);