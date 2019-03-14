const express = require('express');
const mongoose = require('mongoose');
const ClientsRouter = require('./controllers/clients-router');
const ProvidersRouter = require('./controllers/providers-router');
const SwaggerUI = require('swagger-ui-express');
const SwaggerDocument = require('./swagger.json');
const distpath = require('path');


const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const mongo_server = process.env.MONGO_SERVER || 'mongodb://localhost/mongo';


// Express
const app = express();
app.use(express.json());
app.use(express.static(distpath.resolve('dist/')));


// Mongo
mongoose.connect(mongo_server, {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('We\'re connected to mongodb'));


// Swagger
app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(SwaggerDocument));


// Web-app route
app.get('/', (req, res) => {
    res.sendFile(distpath.resolve('dist/index.html'));
});


// API routes
app.get('/api/clients', ClientsRouter.listClients);
app.get('/api/clients/:id', ClientsRouter.getClient);
app.post('/api/clients', ClientsRouter.createClient);
app.put('/api/clients/:id', ClientsRouter.editClient);
app.delete('/api/clients/:id', ClientsRouter.deleteClient);

app.get('/api/providers', ProvidersRouter.listProviders);
app.get('/api/providers/:id', ProvidersRouter.getProvider);
app.post('/api/providers', ProvidersRouter.createProvider);
app.put('/api/providers/:id', ProvidersRouter.editProvider);
app.delete('/api/providers/:id', ProvidersRouter.deleteProvider);


// Listening
app.listen(port, host, () => { console.log(`Running on port http://${host}:${port}`) });