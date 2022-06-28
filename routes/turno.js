const express=require('express')
const router=express.Router()

const{crearTurnos}=require('../controllers/turnos')

router .post ('/', crearTurnos)
module.exports=router
