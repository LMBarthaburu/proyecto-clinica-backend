const RegistroAdm = require('../models/registerAdmin')
const bcrypt = require('bcrypt')


const createRegisterAdm = async (req , res) => {
  const { nombre , contrasena} = req.body
  
  const contrasenaEncriptada = bcrypt.hashSync(contrasena , 10)

  try {
    const newRegisterAdm = new RegistroAdm({
      nombre,
      contrasena: contrasenaEncriptada
    })
    await newRegisterAdm.save()
    res.json({
      message: 'Usuario Creado con exito'
    })
  } catch (error) {
    res.json({
      error
    })
    
  }
 
}

module.exports = { createRegisterAdm }