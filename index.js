const express = require('express');
const { json } = require('express');
const config = require('./config/envConfig');
const controller = require('./routes/routes');
const mongoose = require('mongoose');
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

mongoose.connect('mongodb+srv://mati97arg:matiaspch123@cluster0.6ruoi.mongodb.net/?retryWrites=true&w=majority&appName=CLuster0')
.then(() => console.log('Connected!'));

module.exports = {app, server};
