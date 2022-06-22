const express = require('express');
const router = express.Router();
const { createRegister } = require('../controllers/register')

router
  .post('/', createRegister)
  


module.exports = router;
