const { Schema, model } = require('mongoose')
const turnos=new Schema ({area:String, medico:String, fecha:Number, hora:Number, nombre:String, dni:Number})

module.exports= model('Turno',turnos)