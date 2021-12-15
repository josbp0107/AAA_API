import jwt from 'jsonwebtoken'
import config from '../config.js'
import User from '../models/Usuario.js'
import Roles from '../models/Roles.js'

export const verifyToken = async (req, res, next) => {
    
    try {
        const token = req.headers["x-access-token"]

        if (!token) return res.status(403).json({ message: "No Token provided"}) // el token existe?
    
        const decoded = jwt.verify(token, config.SECRET)
        req.userId = decoded.id
    
        const user = await User.findById(req.userId, {password: 0})
    
        if (!user) return res.status(404).json({ message: "Usuario no autorizado"})
        
        next()
    } catch (err) {
        return res.status(401).json({ message: err.message })
    }
};

export const esAdministrador = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Roles.find({_id: { $in: user.roles }})

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'administrador') {
            next();
            return; 
        }
    }

    return res.status(403).json({message: "Requiere el rol de administrador"})
}

export const esUsuarioInterno = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Roles.find({_id: { $in: user.roles }})

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'usuario interno') {
            next();
            return; 
        }
    }

    return res.status(403).json({message: "Requiere el rol de usuario interno"})
}

export const esUsuarioInternoOAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Roles.find({_id: { $in: user.roles }})

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'usuario interno' || roles[i].name === 'administrador') {
            next();
            return; 
        }
    }

    return res.status(403).json({message: "Requiere el rol de usuario interno o de administrador"})
}