const express = require('express')
const router = express.Router()

const { createMedico, getMedicos, editMedicos, deleteMedico } = require('../controllers/medicos')

router
  .post('/', createMedico)
  .get('/', getMedicos)
  .put('/', editMedicos)
  .delete('/', deleteMedico)


module.exports= router;
