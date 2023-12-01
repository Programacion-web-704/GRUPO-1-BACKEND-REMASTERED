const express = require('express');
const db = require('../db/models/index'); // Asegúrate de importar tu modelo User desde donde corresponda
const ruta = express.Router();


ruta.post('/login', async (req, res) => {
    console.log(req.body)
    try {
      const { correo, contrasena } = req.body;
      console.log('${correo}${contrasena}')

      // Buscar el usuario en la base de datos con carga de asociación
      const usuarioEncontrado = await db.usuarios.findOne({
        where: {
          correo: correo,
          contrasena: contrasena,
        },
      });



      if (usuarioEncontrado) {
        // Usuario encontrado, devolver la información
        return res.status(200).json(usuarioEncontrado).end();
      } else {
        // Usuario no encontrado, devolver un error 401
        return res.status(401).end();
      }
    } catch (error) {
        console.error("Error en la autenticación:", error);
        res.status(500).json({ error: "Error interno del servidor." }).end();
      }
    });


ruta.post('/registrar', async (req, res) => {
    try {
      const { nombre, apellido, tipo_usuario, correo,sexo, contrasena,foto } = req.body;

      console.log(req.body.nombre);
      console.log(req.body.apellido);
      // Crear un nuevo usuario en la base de datos usando Sequelize
      const newUser = await db.usuarios.create({
        "nombres":req.body.nombre,
        "apellidos":req.body.apellido,
        "tipo_usuario":tipo_usuario,
        "correo":correo,
        "sexo":sexo,
        "contrasena":contrasena,
        "foto": 'https://i.pinimg.com/originals/b4/0f/56/b40f569308f8dc513cad19c378110251.jpg',
      });

      res.status(200).json({ success: true, message: 'Registro exitoso', data: newUser });
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
      res.status(500).json({ success: false, message: 'Error interno del servidor' });
    }
  });



  ruta.get('/MostrarUsuariosDatos', async (req, res) => {
    try {
        // Aquí puedes agregar la lógica necesaria para obtener todos los usuarios de tu base de datos
        const usuarios = await db.usuarios.findAll({
            order: [['id', 'DESC']], // Ordena por id en orden descendente
        });

        // Mueve el usuario con id igual a 1 al principio del array
        const usuarioId1Index = usuarios.findIndex(usuario => usuario.id === 1);
        if (usuarioId1Index !== -1) {
            const usuarioId1 = usuarios.splice(usuarioId1Index, 1)[0];
            usuarios.unshift(usuarioId1);
        }

        // Devuelve los datos de los usuarios en la respuesta
        res.status(200).json(usuarios);
    } catch (error) {
        console.error('Error en la solicitud GET:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

ruta.get('/MostrarUsuariosDatos1', async (req, res) => {
  try {
      // Aquí puedes agregar la lógica necesaria para obtener todos los usuarios de tu base de datos
      const usuarios = await db.usuarios.findAll({
      });



      // Devuelve los datos de los usuarios en la respuesta
      res.status(200).json(usuarios);
  } catch (error) {
      console.error('Error en la solicitud GET:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
});

  ruta.post('/ActualizarUsuarioDatos', async (req, res) => {
    try {
      const { id, nombre, apellido, documento, numero } = req.body;

      // Verifica que todos los campos necesarios estén presentes
      if (!id || !nombre || !apellido || !documento || !numero) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
      }

      // Busca el usuario en la base de datos
      const usuario = await db.usuarios.findByPk(id);

      // Si no se encuentra el usuario, devuelve un error
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado.' });
      }

      // Actualiza la información del usuario
      usuario.nombre = nombre;
      usuario.apellido = apellido;
      usuario.documento = documento;
      usuario.numero = numero;

      // Guarda los cambios en la base de datos
      await usuario.save();

      // Responde con el usuario actualizado
      res.status(200).json(usuario);
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  });




  ruta.post('/EditarUsuariosCuenta', async (req, res) => {
    try {
      const { id, correo, contrasena } = req.body;

      // Verifica que todos los campos necesarios estén presentes
      if (!id || !correo || !contrasena) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
      }

      // Busca el usuario en la base de datos
      const usuario = await db.usuarios.findByPk(id);

      // Si no se encuentra el usuario, devuelve un error
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado.' });
      }

      // Actualiza la información del usuario
      usuario.correo = correo;
      usuario.contrasena = contrasena;

      // Guarda los cambios en la base de datos
      await usuario.save();

      // Responde con el usuario actualizado
      res.status(200).json(usuario);
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  });









module.exports = ruta;
