const { Queue, Worker } = require('bullmq');
const Redis = require('ioredis');

const connection = new Redis();

// Cola
const notificationQueue = new Queue('notificaciones', { connection });

// Worker
const worker = new Worker(
  'notificaciones',
  async (job) => {
    console.log('Enviando notificación...');
    console.log('Usuario:', job.data.usuario);
    console.log('Mensaje:', job.data.mensaje);

    // Simulación de envío
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Notificación enviada correctamente');
  },
  { connection }
);

// Función para agregar trabajos
const enviarNotificacion = async (usuario, mensaje) => {
  await notificationQueue.add('nuevaNotificacion', {
    usuario,
    mensaje,
  });
};

module.exports = {
  enviarNotificacion,
};
