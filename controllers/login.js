const bcrypt = require('bcrypt')
const Registro = require('../models/register')
const jwt = require('jsonwebtoken')

const createLogin = async(req , res) => {
  const { email , contrasena } = req.body
  const user = await Registro.findOne( {email} )

  if (!user) {
    return res.status(404).json({
      message: 'Usuario inexistente'
    })    
  }

  const match = bcrypt.compareSync(contrasena , user.contrasena)
  const token = jwt.sign({user} , 'clinica24i', {expiresIn: '1h'})


  if (match) {
    return res.status(200).json({
      message: 'Usuario logueado correctamente',
      token
    })    
  }else{
   return res.status(404).json({
      message: 'Usuario o contrasena invalido'
    })
  }
  
}

module.exports = { createLogin }