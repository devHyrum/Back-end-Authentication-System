import express from 'express';
import { registeredUsuario, loginUsuario, getUsuario, updateUsuario, getImagen, checkEmail } from '../controllers/usuarios.controller.js';
import { uploadImage } from '../config/multer.js';
import { verifyToken } from '../middleware/auth.js';
import { manejarErrorArchivo } from '../helpers/errorHandler.js';

const router = express.Router();

router.post('/register', registeredUsuario);
router.post('/login', loginUsuario);
router.post('/check-email', checkEmail);
router.get('/me', verifyToken, getUsuario);
router.put('/update', verifyToken, uploadImage.single('imagen'), updateUsuario, manejarErrorArchivo);
router.get('/image/:nombre', verifyToken, getImagen);

export default router;
