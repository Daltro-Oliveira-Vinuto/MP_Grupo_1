const express = require('express')
const app = express()
const router = express.Router()
const mongoose = require('mongoose')
const config = require('./config/database')
const authentication = require('./routes/authentication')(router)
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.Promise = global.Promise
mongoose.connect(config.uri, err => {
  if (err) {
    console.log('Could NOT connect to database: ', err)
  } else {
    console.log('Connected to database: ' + config.db)
  }
})

app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/authentication', authentication)

app.listen(8080, () => {
  console.log('Listening on port 8080')
})
