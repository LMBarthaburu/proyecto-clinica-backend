const { Schema , model } = require('mongoose')

const registro = new Schema({
  nombre: String,
  fecha: String,
  dni: Number,
  direccion: String,
  localidad: String,
  provincia: String,
  email: String,
  contrasena: String,
  repeatcontrasena: String,
  id: String
})

module.exports = model('Registro' , registro)