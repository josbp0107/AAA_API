import {Router} from 'express'
const router = Router()

import * as subsidiosController from '../controllers/subsidios.controller.js'
import {authJwt} from '../middlewares/index.js'


router.post('/', [authJwt.verifyToken, authJwt.esUsuarioInternoOAdmin], subsidiosController.crearSubsidio)

router.get('/', authJwt.verifyToken, subsidiosController.obtenerSubsidio)

router.get('/:subsidioId', [authJwt.verifyToken, authJwt.esUsuarioInternoOAdmin], subsidiosController.obtenerSubsidioPorId)

router.put('/:subsidioId', [authJwt.verifyToken, authJwt.esUsuarioInternoOAdmin],  subsidiosController.actualizarSubsidio)

router.delete('/:subsidioId', [authJwt.verifyToken, authJwt.esUsuarioInternoOAdmin], subsidiosController.eliminarSubsidioPorId)

export default router;