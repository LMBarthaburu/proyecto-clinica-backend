const express = require('express')
const router = express.Router()

const {createAreas} = require('../controllers/areas')

router
  .post('/', createAreas);

module.exports= router;
