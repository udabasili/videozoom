const mongoose = require('mongoose')
const { MONGO_URI } = require('../config')
mongoose.set('debug', true)

mongoose.connect(MONGO_URI)
const db = mongoose.connection

module.exports = db