require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//parse applicatin/json
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

var routes = require('./routes/public')
routes(app)

app.listen(3000, () => {
  console.log(`Server started on port 3000`)
})