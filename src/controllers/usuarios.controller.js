import usuarioModel from '../models/Usuario.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { DB_SECRET_KEY } from '../config/config.js';
import { nuevoNombreArchivo } from '../config/multer.js';
import path from 'path';
import fs from 'fs/promises';

export const registeredUsuario = async (req, res) => {
    const { email, password } = req.body; // Solo email y password

    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'Email y password son campos obligatorios' });
        }

        const existingUser = await usuarioModel.findUsuarioByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'El correo electrónico ya está registrado.' });
        }

        const resultado = await usuarioModel.registerUsuario(email, password);
        if (resultado.affectedRows !== 1) return res.status(500).json({ message: 'No se pudo insertar el usuario' });
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
};

export const loginUsuario = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await usuarioModel.findUsuarioByEmail(username);
        
        if (!user) {
            return res.status(401).json({ message: 'Autenticación fallida' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Autenticación fallida' });
        }

        const token = jwt.sign({ usuarioId: user.usuario_id }, DB_SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al iniciar sesión' });        
    }
};

export const getUsuario = async (req, res) => {
    try {
        const usuario = await usuarioModel.verifyUsuario(req.user.usuarioId);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener información del usuario' });
    }
};

export const updateUsuario = async (req, res) => {
    try {
        const { nombre, email, password, bio, phoneNumber } = req.body;
        const photoUser = nuevoNombreArchivo ? `${nuevoNombreArchivo}` : null;

        const result = await usuarioModel.updateUsuario(req.user.usuarioId, nombre, email, password, bio, phoneNumber, photoUser);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ message: 'Error al actualizar usuario' });
    }
};

export const getImagen = async (req, res) => {
    try {
      const { nombre } = req.params;
  
      const token = req.headers['authorization'];
      if (!token) {
        return res.status(401).json({ message: 'No se proporcionó token' });
      }
  
      jwt.verify(token.startsWith('Bearer ') ? token.slice(7) : token, DB_SECRET_KEY, (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Token inválido' });
        }
  
        const ruta = path.resolve('./uploads/photoUser');
        const rutaImagen = path.join(ruta, nombre);
  
        fs.access(rutaImagen, fs.constants.F_OK)
          .then(() => res.sendFile(rutaImagen))
          .catch(() => res.status(404).json({ message: 'No se encontró la imagen' }));
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error interno' });
    }
};

export const checkEmail = async (req, res) => {
    const { email } = req.body;

    try {
        if (!email) {
            return res.status(400).json({ message: 'Email es un campo obligatorio' });
        }

        const existingUser = await usuarioModel.findUsuarioByEmail(email);
        if (existingUser) {
            return res.status(200).json({ exists: true });
        } else {
            return res.status(200).json({ exists: false });
        }
    } catch (error) {
        console.error('Error al verificar el correo electrónico:', error);
        res.status(500).json({ message: 'Error al verificar el correo electrónico' });
    }
};
