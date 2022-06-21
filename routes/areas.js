const express = require('express')
const router = express.Router()

const {createAreas, getAreas, editAreas, deleteAreas} = require('../controllers/areas')

router
  .post('/', createAreas)
  .get('/', getAreas)
  .put('/', editAreas)
  .delete('/', deleteAreas)


module.exports= router;
