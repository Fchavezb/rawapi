const express = require('express');
const router = express.Router();
let datos = {
  id: 1,
  nombre: 'Franklin',
  cursos:{
   Icuatrimestre:
    [
        {
            codigo:'ITI-401',
            Titulo:'Programacion Web I'
        },
         {
            codigo:'ITI-401',
            Titulo:'Programacion Web I'
        }
    
    ]
   
  },
  especialidad:'Tecnologias de la Informacion',
  universidad:'Universidad Tecnica Nacional'
};

// GET
router.get('/', (req, res) => {
  res.json(datos);
});

// PUT
router.put('/', (req, res) => {
  const { nombre, profesion } = req.body;
  if (nombre) datos.nombre = nombre;
  if (profesion) datos.profesion = profesion;
  res.json({ mensaje: 'Datos actualizados correctamente', datos });
});

// DELETE
router.delete('/', (req, res) => {
  datos = {};
  res.json({ mensaje: 'Datos eliminados correctamente' });
});

module.exports = router;