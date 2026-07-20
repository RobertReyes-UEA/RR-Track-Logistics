const prisma = require('../prisma/client');
const redis = require('../config/redis');

// Obtener vehículos con caché
const obtenerVehiculos = async (req, res) => {
  try {
    const cache = await redis.get('vehiculos');

    if (cache) {
      console.log('Datos obtenidos desde Redis');
      return res.json(JSON.parse(cache));
    }

    const vehiculos = await prisma.vehiculo.findMany({
      include: {
        conductor: true,
        rutas: true,
      },
    });

    // Guardar en caché por 5 minutos
    await redis.setEx('vehiculos', 300, JSON.stringify(vehiculos));

    console.log('Datos obtenidos desde MySQL');
    res.json(vehiculos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear vehículo e invalidar caché
const crearVehiculo = async (req, res) => {
  try {
    const vehiculo = await prisma.vehiculo.create({
      data: req.body,
    });

    // Invalidar caché
    await redis.del('vehiculos');

    res.status(201).json(vehiculo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  obtenerVehiculos,
  crearVehiculo,
};
