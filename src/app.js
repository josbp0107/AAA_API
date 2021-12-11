import express from 'express'
import morgan from 'morgan'

import subsidiosRoutes from './routes/subsidios.routes.js'

const app = express()

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.json('Hola')
})

app.use('/subsidios', subsidiosRoutes)

export default app;