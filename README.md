# RR-Track-Logistics

Backend del sistema de monitoreo y control de camiones mediante GPS.

## Semana 8 – Optimización del Backend

### Mejoras implementadas

* Caché con Redis.
* Estrategia Cache Aside.
* Corrección del problema N+1 mediante Eager Loading.
* Tareas asíncronas con BullMQ.
* Uso de Lazy Loading y Eager Loading.
* Optimización de autenticación con JWT.
* Comparación de rendimiento antes y después de la optimización.

## Tecnologías

* Node.js
* Express
* Prisma ORM
* MySQL
* Redis
* BullMQ
* JWT

## Ejecución

```bash
npm install
npm run dev
```

Worker de notificaciones:

```bash
npm run worker
```
