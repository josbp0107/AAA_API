import pkg from 'mongoose';
//import {Schema, model} from 'mongoose'

const {Schema, model} = pkg;

const subsidiosSchema = new Schema({
    nombre: String,
    valorEstratoUno: Number,
    valorEstratoDos: Number,
    valorEstratoTres: Number,
    valorEstratoCuatro: Number,
    valorEstratoCinco: Number,
    valorEstratoSeis: Number,
    valorEstratoSiete: Number,
    estado: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('Subsidio', subsidiosSchema);