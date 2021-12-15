import mongoose from 'mongoose'
import config from './config.js'

mongoose.connect(config.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log("Db is connected"))
    .catch(error => console.log(error))