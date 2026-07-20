const express = require('express');
const router = express.Router();

const {
  obtenerVehiculos,
  crearVehiculo,
} = require('../controllers/vehiculoController');

const verificarToken = require('../middleware/auth');

router.get('/', verificarToken, obtenerVehiculos);
router.post('/', verificarToken, crearVehiculo);

module.exports = router;
