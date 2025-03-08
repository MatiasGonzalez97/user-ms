const express = require('express');
const { json } = require('express');
const config = require('./config/envConfig');
const controller = require('./routes/routes');
const cors = require('cors')

const app = express();

const server = app.listen(config.PORT || 3000,()=>{
    console.log(`Se está escuchando en el puerto ${config.PORT}`);
});
app.use(json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// O si solo quieres permitir localhost y tu dominio de producción:
app.use(cors({
    origin: ["http://localhost:5173/", "https://tu-app-en-produccion.com/","https://localhost:5173/","http://localhost:5173","https://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use('/api',controller);

module.exports = {app, server};
