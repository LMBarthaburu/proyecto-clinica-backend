const { Schema, model } = require('mongoose')

const areas = new Schema({
  nombre: String,
  imagen: String,
  id: String,
})

module.exports = model('Area', areas)