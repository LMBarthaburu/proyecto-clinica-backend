const express = require('express');
const router = express.Router();
const {createRegister, deleteRegister, editRegister, getRegister} = require('../controllers/register')

router
  .post('/', createRegister)
  .get('/', getRegister)
  .put('/', editRegister)
  .delete('/', deleteRegister)



module.exports = router;
