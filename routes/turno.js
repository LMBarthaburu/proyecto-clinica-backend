const express=require('express')
const router=express.Router()

const{crearTurnos, getTurnos, deleteTurnos}=require('../controllers/turnos')

router 
  .post ('/', crearTurnos)
  .get('/', getTurnos)
  .delete ('/', deleteTurnos)
module.exports=router
