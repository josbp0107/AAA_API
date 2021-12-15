//import {Schema, model} from "mongoose"
import bcrypt from 'bcryptjs';
import pkg from 'mongoose';
const {Schema, model} = pkg;

const userSchema = new Schema({
    identificacion: {
        type: Number,
        unique: true
    },
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    nic: {
        type: String
    },
    email: {
        type: String
    },
    ciudad: {
        type: String
    },
    direccion: {
        type: String
    },
    telefono: {
        type: Number
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    roles: [
        {
            ref: "Roles", // Tiene una referencia y un modelo de datos
            type: Schema.Types.ObjectId,
        },
    ],  
},
{
    timestamps: true,
    versionKey: false,
}
);

userSchema.statics.encriptarPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

userSchema.statics.compararPassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

export default model('User', userSchema);