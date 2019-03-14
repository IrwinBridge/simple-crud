const Joi = require('joi');

function validateClient(body) {
    const schema = {
        name: Joi.string().min(3).max(80).required(),
        email: Joi.string().email().required(),
        phone: Joi.string().required(),
        providers: Joi.array().required(),
        __v: Joi.allow()
    }
    return Joi.validate(body, schema);
}

function validateProvider(body) {
    const schema = {
        name: Joi.string().min(3).max(80).required(),
        __v: Joi.allow()
    }
    return Joi.validate(body, schema);
}

module.exports.validateClient = validateClient;
module.exports.validateProvider = validateProvider;