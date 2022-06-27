const express = require('express');
const router = express.Router();
const { createRegisterAdm } = require('../controllers/registerAdmin')

router
  .post('/', createRegisterAdm)
  


module.exports = router;
