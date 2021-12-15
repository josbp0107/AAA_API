import express from 'express'
import morgan from 'morgan'

import {crearRoles} from './libs/initialSetup.js' 

import subsidiosRoutes from './routes/subsidios.routes.js'
import authRoutes from './routes/auth.routes.js'
import usersRoutes from './routes/user.routes.js'

const app = express()
crearRoles()

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.json('Hola')
})

app.use('/subsidios', subsidiosRoutes)
app.use('/auth', authRoutes)
app.use('/usuarios', usersRoutes)

export default app;