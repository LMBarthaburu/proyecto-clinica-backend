const bcrypt = require('bcrypt')
const registroAdm = require('../models/registerAdmin')

const loginAdm = async(req , res) => {
  const { nombre , contrasena } = req.body
  const user = await registroAdm.findOne( {nombre} )

  if (!user) {
    return res.status(404).json({
      message: 'Usuario o contrasena invalido'
    })    
  }

  const match = bcrypt.compareSync(contrasena , user.contrasena)


  if (match) {
    return res.status(200).json({
      user
    })    
  }else{
   return res.status(404).json({
      message: 'Usuario o contrasena incorrecto'
    })
  }
  
}

module.exports = { loginAdm }