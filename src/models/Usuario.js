import {Schema, model} from "mongoose"

new Schema({
    id: {
        type: integer
    },
    predio: {
        type: integer
    },
    estrato: {
        type: integer
    },
    ciudad: {
        type: String
    },
    direccion: {
        type: String
    },
    telefono: {
        type: integer
    },
    username: {
        type: String
    },
    password: {
        type: String,
        required: true
    }  
})