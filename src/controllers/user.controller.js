import jwt from 'jsonwebtoken'
import User from "../models/Usuario.js";
import Role from '../models/Roles.js'
import config from '../config.js'


export const createUser = async (req, res) => {
    const {identificacion, nombre, apellido, nic, email, ciudad, direccion, telefono, username, password, roles} = req.body;
    try {
    
    const nuevoUsuario = new User({
         identificacion,
         nombre,
         apellido,
         nic,
         email,
         ciudad,
         direccion,
         telefono,
         username,
         roles
     })
     
         const seEncontroRol = await Role.find({name: {$in: roles}})
         nuevoUsuario.roles = seEncontroRol.map(role => role._id)

         if (!password) {
            nuevoUsuario.password = await User.encriptarPassword('aaa123*')
         }
     
    const usuarioGuardado = await nuevoUsuario.save();

    const token = jwt.sign({id: usuarioGuardado._id}, config.SECRET, {
        expiresIn: 86400 //24 horas, esta en segundos
    })

      res.status(200).json({token})
    } catch (err) {
        console.log(err)
    }
}

export const obtenerUsuarios = async (req, res) => {
    const usuarios = await User.find();
    res.json(usuarios)
}
