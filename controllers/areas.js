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

module.exports = { createAreas }