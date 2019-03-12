const Provider = require('../model/provider-schema');
const Validator = require('../validator');

function listProviders(req, res) {
    Provider.find().sort('name').exec((err, providers) => {
        if (err) return res.status(404).send(err);
        res.send(providers);
    });
}

function getProvider(req, res) {
    Provider.findById(req.params.id, (err, provider) => {
        if (err) return res.status(404).send(err);
        res.send(provider);
    });
}

function createProvider(req, res) {
    const validated = Validator.validateProvider(req.body);
    if (validated.error) return res.status(400).send(validated.error.details[0].message);

    const providerModel = new Provider({
        name: req.body.name
    });

    providerModel.save((err, provider) => {
        if (err) return res.status(400).send(err);
        res.send(provider);
    });
}

function editProvider(req, res) {
    const validated = Validator.validateProvider(req.body);
    if (validated.error) return res.status(400).send(validated.error.details[0].message);

    Provider.findByIdAndUpdate(req.params.id,
                                req.body,
                                {new: true},
                                (err, provider) => {
        if (err) return res.status(404).send(err);
        res.send(provider);
    });
}

function deleteProvider(req, res) {
    Provider.findByIdAndDelete(req.params.id, (err, provider) => {
        if (err) return res.status(404).send(err);
        res.send(provider);
    });
}

module.exports.listProviders = listProviders;
module.exports.getProvider = getProvider;
module.exports.createProvider = createProvider;
module.exports.editProvider = editProvider;
module.exports.deleteProvider = deleteProvider;