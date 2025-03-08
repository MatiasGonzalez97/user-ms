const express = require('express');
const { json } = require('express');
const config = require('./config/envConfig');
const controller = require('./routes/routes');

const app = express();

const server = app.listen(config.PORT || 3000,()=>{
    console.log(`Se está escuchando en el puerto ${config.PORT}`);
});
app.use(json());
app.use(express.urlencoded({extended: true}));
app.use('/api',controller);

module.exports = {app, server};
