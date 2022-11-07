const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const categoryRoutes = require('./routes/category')
const keys = require('./config/keys')

mongoose.connect(keys.MONGO_URI)
    .then(() => {
        console.log('DataBase Success connected')
    })
    .catch((err) => {
        console.log(err)
    })

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)
app.use('/api/category', categoryRoutes)

module.exports = app
