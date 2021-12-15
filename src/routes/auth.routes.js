import {Router} from 'express' 
const router = Router()

import * as authController from '../controllers/auth.controller.js'
import { verifySignup } from '../middlewares/index.js'

router.post(
    '/registrarse',
    [verifySignup.checkDuplicateUsernameOrEmail],
    authController.registrarse)

router.post('/login', authController.login)


export default router;