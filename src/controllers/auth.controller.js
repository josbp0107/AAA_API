import User from "../models/Usuario.js";
import jwt from 'jsonwebtoken'
import config from '../config.js'
import Role from '../models/Roles.js'

export const registrarse = async (req, res) => {

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
         password: await User.encriptarPassword(password)
     })
     if (roles) {
         const seEncontroRol = await Role.find({name: {$in: roles}})
         nuevoUsuario.roles = seEncontroRol.map(role => role._id)
     } else {
         const role = await Role.findOne({name: "usuario externo"})
         nuevoUsuario.roles = [role._id]
     }
    const usuarioGuardado = await nuevoUsuario.save();

    const token = jwt.sign({id: usuarioGuardado._id}, config.SECRET, {
        expiresIn: 86400 //24 horas, esta en segundos
    })

      res.json({token})
    } catch (err) {
        console.log(err)
    }
}

export const login = async (req, res) => {
    try {
        const usuarioEncontrado = await User.findOne({username: req.body.username}).populate('roles');

        if (!usuarioEncontrado) return res.status(400).json({message: "Usuario no encontrado en la base de datos"})

        
        const matchPassword = await User.compararPassword(req.body.password, usuarioEncontrado.password)

        if (!matchPassword) return res.status(401).json({toke: null, message: "Contraseña invalida"})

        const token = jwt.sign({id: usuarioEncontrado._id}, config.SECRET, {
            expiresIn: 86400
        })
       
        res.json({token})
    
    } catch (err) {
        console.log(err)
    }
    
}