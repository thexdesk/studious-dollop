/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
var express = require('express')
// eslint-disable-next-line no-unused-vars
var debug = require('debug')('express-gun:routes')
var Gun = require('gun')
var router = express.Router()

var bodyParser = require('body-parser')

var { gun, user } = require('./db')

var data = gun.get('data')

/* Router Settings */

// router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// router.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With')
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
//   next()
// })

router.get('/', (req, res) => {
  // eslint-disable-next-line no-tabs
  res.sendStatus(200)
})


/*AUTHENTICATE */

// Signup

router.post('/register', async (req, res) => {
  try {
    res.json({ message: "This is the register route!" })
  }
  catch (err) {
    console.error(err.message)
  }
})

router.post('/login', async (req, res) => {
  try {
    res.json({ message: "This is the login route!" })
  }
  catch (err) {
    console.error(err.message)
  }
})
/* SET DATA */

router.post('/api/set/:id', (req, res) => {
  try {
    console.log(req.body)
    data.get(req.params.id).set(req.body)
    res.sendStatus(200)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

router.get('/api/set/:id/:key/:onue', (req, res) => {
  try {
    var doc = {}; doc[req.params.key] = req.params.onue
    data.get(req.params.id).set(doc)
    res.sendStatus(200)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

/* GET DATA */

router.get('/api/link/:id/:link', (req, res) => {
  try {
    var link = data.get(req.params.link)
    data.get(req.params.id).get('link').put(link)
    res.sendStatus(200)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

/* GET DATA */

router.get('/api/get/:id/:key?', (req, res) => {
  try {
    data.get(req.params.id).map().on(function (data) {
      if (!data) res.sendStatus(404), res.send('No Data')
      else if (req.params.key) res.send(data[req.params.key])
      else res.send(data)
    })
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

router.get('/api/getlink/:id', (req, res) => {
  try {
    data.get(req.params.id).get('link').map().once(function (data, key) {
      console.log('Link:', key, data)
      if (!data) res.sendStatus(404)
      else res.send(data)
    })
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

/* UNSET DATA */

router.get('/api/unset/:id/:key?', (req, res) => {
  try {
    data.get(req.params.id).put(null)
    res.sendStatus(200)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

module.exports = app => {
  app.use(Gun.serve)
  app.use('/', router)
}
