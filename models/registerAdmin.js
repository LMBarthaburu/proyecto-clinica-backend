const { Schema , model } = require('mongoose')

const registroAdm = new Schema({
  nombre: String,
  contrasena: String,
})

module.exports = model('RegistroAdm' , registroAdm)