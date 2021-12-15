//import { Schema, model } from "mongoose";
import pkg from 'mongoose';
const { Schema, model } = pkg;

export const ROLES = ["administrador", "usuario interno", "usuario externo"]

const roleSchema = new Schema({
    name: String
}, {
    versionKey: false
})

export default model('Roles', roleSchema)