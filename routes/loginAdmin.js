const express = require('express');
const router = express.Router();
const { loginAdm } = require('../controllers/loginAdmin')

router
  .post('/', loginAdm)
;

module.exports = router;