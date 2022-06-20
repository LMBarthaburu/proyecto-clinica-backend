const Registro = require('../models/register')
const bcrypt = require('bcrypt')


const createRegister = async(req , res) => {
  const { nombre , fecha , dni , direccion , localidad , provincia , email , contrasena , repeatcontrasena} = req.body

  const contrasenaEncriptada = bcrypt.hashSync(contrasena , 10)
  const repeatcontrasenaEncriptada = bcrypt.hashSync(repeatcontrasena , 10)

  try {
    const newRegister = new Registro({
      nombre,
      fecha,
      dni,
      direccion,
      localidad,
      provincia,
      email,
      contrasena: contrasenaEncriptada,
      repeatcontrasena: repeatcontrasenaEncriptada,
    })

    if (contrasena === repeatcontrasena) {
      await newRegister.save()
      res.json({
        message: 'Usuario creado exitosamente'
      })
    }else{
      res.json({
        message: 'Las contrasenas deben coincidir'
      })
    }    

  } catch (error) {
    res.json({
      error
    })
    
  }
 
}

module.exports = { createRegister }