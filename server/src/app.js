const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {sequelize} = require('./models')
const config = require('./config/config')

//App
const app = express()
app.use(bodyParser.json())
app.use(cors())

//Routes
require('./routes')(app)

//DB
sequelize.sync()
.then(() =>{
    app.listen(config.port)
    console.log(`server started on port: ${config.port}`)
})
