const { Schema, model } = require('mongoose')
const turnos=new Schema ({area:String, medico:String, fecha:String, hora:String, nombre:String, dni:Number, id:String})

module.exports= model('Turno',turnos)