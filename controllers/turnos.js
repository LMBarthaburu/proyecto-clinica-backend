const Turno=require('../models/turnos')

const crearTurnos = async(req,res) => {

    const {area,medico,fecha,hora,nombre,dni} = req.body

    try {
        const newTurno=new Turno ({
            area,medico,fecha,hora,nombre,dni
        })
        await newTurno.save()
        res.json ({Message:'¡Turno creado exitosamente!'})
    } catch (error) {
        res.json ({error})
    }
}

const getTurnos = async (rep,res)=>{
    const turnos = await Turno.find({})
    try {
      res.json({
        Message:'¡Todos los turnos visibles!'
      })
    } catch (error) {
      res.json({
        error
      })
    }
  }

  const deleteTurnos= async (req, res)=>{
    const {id} = req.body
    const turnoEliminada = await Turno.findByIdAndDelete(id)
    try {
      res.json({
        message: 'Turno eliminado',
        turnoEliminada
      })
    } catch (error) {
        res.json({
            error
          })
    }
  }

module.exports={crearTurnos , getTurnos , deleteTurnos}
