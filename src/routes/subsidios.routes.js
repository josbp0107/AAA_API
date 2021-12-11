import {Router} from 'express'
const router = Router()

import * as subsidiosController from '../controllers/subsidios.controller.js'

router.post('/', subsidiosController.crearSubsidio)

router.get('/', subsidiosController.obtenerSubsidio)

router.get('/:subsidioId', subsidiosController.obtenerSubsidioPorId)

router.put('/:subsidioId', subsidiosController.actualizarSubsidio)

router.delete('/:subsidioId', subsidiosController.eliminarSubsidioPorId)

export default router;