var Gun = require('gun')
var server = require('./app').server

var gun = Gun({
  web: server
})
var user = gun.user()
module.exports = {gun, user}
