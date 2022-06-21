const Area = require('../models/areas')

const createAreas = async(req, res) => {
  const { nombre, imagen } = req.body

  try {
    const newArea = new Area({
      nombre,
      imagen,
    })

    await newArea.save()

    res.json({
      message: 'Area creada exitosamente'
    })
  } catch (error) {
    res.json({ 
      error
    })
  }
}

const getAreas = async (rep,res)=>{
  const areas = await Area.find({})
  try {
    res.json({
      areas
    })
  } catch (error) {
    res.json({
      error
    })
  }
}

const editAreas= async (req, res)=>{
  const {nombre, imagen, id} = req.body
  const areaEditada = await Area.findByIdAndUpdate(id,{
    nombre,
    imagen
  })
  try {
    res.json({
      areaEditada
    })
  } catch (error) {
    
  }
}

const deleteAreas= async (req, res)=>{
  const {id} = req.body
  const areaEliminada = await Area.findByIdAndDelete(id)
  try {
    res.json({
      message: 'Area eliminada',
      areaEliminada
    })
  } catch (error) {
    
  }
}

module.exports = { createAreas, getAreas, editAreas, deleteAreas }