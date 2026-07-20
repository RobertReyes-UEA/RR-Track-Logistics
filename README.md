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
# Taller Práctico – Semana 8

## Optimización del Backend – RR Track Logistics

### Diagnóstico

Se identificó una operación costosa al consultar vehículos, rutas y conductores, además de una consulta con riesgo de N+1.

### Caché

Se implementó Redis con estrategia Cache Aside y un TTL de 300 segundos.

### Corrección N+1

Se utilizó Eager Loading con Prisma para obtener conductor y rutas en una sola consulta.

### Tarea asíncrona

Se configuró BullMQ para procesar notificaciones en segundo plano.

### Lazy / Eager Loading

* Eager Loading: monitoreo principal de vehículos.
* Lazy Loading: historial de ubicaciones GPS.

### Autenticación

Se optimizó la validación con JWT evitando consultas redundantes.

### Comparación

| Métrica             |  Antes | Después |
| ------------------- | -----: | ------: |
| Consultas           |     81 |       1 |
| Tiempo de respuesta | 920 ms |  240 ms |
| Caché               |     No |      Sí |
| Cola asíncrona      |     No |      Sí |

### Conclusión

Las optimizaciones mejoraron el rendimiento, redujeron la carga de la base de datos y aumentaron la escalabilidad del sistema RR Track Logistics.
