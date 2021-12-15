import {Router} from 'express'
const routes = Router()

import * as userControllers from '../controllers/user.controller.js'
import {authJwt,verifySignup } from '../middlewares/index.js'

routes.post('/', [
    authJwt.verifyToken, 
    authJwt.esAdministrador,
], userControllers.createUser)

routes.get('/', authJwt.verifyToken, authJwt.esAdministrador, userControllers.obtenerUsuarios)

export default routes;