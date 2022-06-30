const Medico = require('../models/medicos')

const createMedico = async(req, res) => {
  const { nombre, area } = req.body

  try {
    const newMedico = new Medico({
      nombre,
      area,
    })

    await newMedico.save()

    res.json({
      message: 'Medico/a agregado exitosamente'
    })
  } catch (error) {
    res.json({ 
      error
    })
  }
}

const getMedicos = async (rep,res)=>{
  const medicos = await Medico.find({})
  try {
    res.json({
      medicos
    })
  } catch (error) {
    res.json({
      error
    })
  }
}

const editMedicos= async (req, res)=>{
  const {nombre, area, id} = req.body
  const medicoEditado = await Medico.findByIdAndUpdate(id,{
    nombre,
    area
  })
  try {
    res.json({
      message: 'Medico/a editado correctamente'
    })
  } catch (error) {
    
  }
}

const deleteMedico= async (req, res)=>{
  const {id} = req.body
  const medicoEliminado = await Medico.findByIdAndDelete(id)
  try {
    res.json({
      message: 'Medico/a eliminada',
    })
  } catch (error) {
    
  }
}

module.exports = { createMedico, getMedicos, editMedicos, deleteMedico }