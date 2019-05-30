require('dotenv').config();
const { Nuxt, Builder} = require('nuxt')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors')

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// app.use(cors({
//     origin: 'http://yourapp.com'
//   }))

require('./routes')(app)

let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()

// Only Server
// const nuxt = new Nuxt(config)
// const { host, port } = nuxt.options.server
// app.listen(port, host)