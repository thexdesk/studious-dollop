var Gun = require('gun')
var server = require('./app').server

var gun = Gun({
  web: server,
  radisk: true,
  localStorage: false
})

module.exports = gun
