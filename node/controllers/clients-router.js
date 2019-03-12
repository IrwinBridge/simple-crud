const Client = require('../model/client-schema');
const Provider = require('../model/provider-schema');
const Validator = require('../validator');

function listClients(req, res) {
    Client.find().sort('name').populate('providers').exec((err, clients) => {
        if (err) return res.status(404).send(err);
        res.send(clients);
    });
}

function getClient(req, res) {
    Client.findById(req.params.id).populate('providers').exec((err, client) => {
        if (err) return res.status(404).send(err);
        res.send(client);
    });
}

function createClient(req, res) {
    const validated = Validator.validateClient(req.body);
    if (validated.error) return res.status(400).send(validated.error.details[0].message);

    const clientModel = new Client({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        providers: req.body.providers
    });

    clientModel.save((err, client) => {
        if (err) return res.status(400).send(err);
        Client.populate(client, 'providers', (err, client) => {
            res.send(client);
        });
    });
}

function editClient(req, res) {
    const validated = Validator.validateClient(req.body);
    if (validated.error) return res.status(400).send(validated.error.details[0].message);

    Client.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, client) => {
        if (err) return res.status(404).send(err);
        Client.populate(client, 'providers', (err, client) => {
            res.send(client);
        });
    });
}

function deleteClient(req, res) {
    Client.findByIdAndDelete(req.params.id, (err, client) => {
        if (err) return res.status(404).send(err);
        Client.populate(client, 'providers', (err, client) => {
            res.send(client);
        });
    });
}

module.exports.listClients = listClients;
module.exports.getClient = getClient;
module.exports.createClient = createClient;
module.exports.editClient = editClient;
module.exports.deleteClient = deleteClient;