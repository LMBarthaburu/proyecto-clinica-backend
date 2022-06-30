const { Schema, model } = require('mongoose')

const medicos = new Schema({
  nombre: String,
  area: String,
  id: String,
})

module.exports = model('Medico', medicos)