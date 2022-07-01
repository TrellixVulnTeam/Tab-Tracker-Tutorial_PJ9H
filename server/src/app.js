const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) =>{
    res.send({
        message: `hi ${req.body.email}`
    })
})

app.listen(process.env.PORT || 5000)