const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new mongoose.Schema({
    name: { type : String, required : true },
    email: { type : String, unique : true, required : true, dropDups: true },
    phone: { type : String, required : true },
    providers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Provider'
        }
    ]
}, {versionKey: false});

module.exports = mongoose.model('Client', clientSchema);