import {ROLES} from '../models/Roles.js'
import User from '../models/Usuario.js'


export const checkDuplicateUsernameOrEmail = async (req, res, next) => {

    const user = await User.findOne({username: req.body.username})
    
    if (user) return res.status(400).json({message: 'El usuario ya existe'})

    next();
}


export const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                return res.status(404).json({message: `Role ${req.body.roles[i]} does not exists`})        
            }
        }
    }
    next();
}