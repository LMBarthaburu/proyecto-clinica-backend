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

  const getRegister = async (rep,res)=>{
    const registros = await Registro.find({})
    try {
      res.json({
        registros
      })
    } catch (error) {
      res.json({
        error
      })
    }
  }
  
  const editRegister= async (req, res)=>{
    const { nombre , fecha , dni , direccion , localidad , provincia , email, id} = req.body
    const regsitroEditado = await Registro.findByIdAndUpdate(id,{
      nombre,
      fecha,
      dni,
      direccion,
      localidad,
      provincia,
      email
    })
    try {
      res.json({
        message: 'Usuario editado con exito'
      })
    } catch (error) {
      
    }
  }
  
  const deleteRegister= async (req, res)=>{
    const {id} = req.body
    const registroEliminado = await Registro.findByIdAndDelete(id)
    try {
      res.json({
        message: 'Usuario eliminada',
      })
    } catch (error) {
      
    }
  }

module.exports = {createRegister, deleteRegister, editRegister, getRegister}