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

module.exports={crearTurnos}