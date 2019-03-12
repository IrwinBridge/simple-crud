const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    providers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Provider'
        }
    ]
}, {versionKey: false});

module.exports = mongoose.model('Client', clientSchema);