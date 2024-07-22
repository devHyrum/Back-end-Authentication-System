import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { registeredUsuario, loginUsuario, getUsuario, updateUsuario, getImagen, checkEmail } from './controllers/usuarios.controller.js';
import { DB_SECRET_KEY } from './config/config.js';
import { manejarErrorArchivo } from './helper.js';
import { uploadImage } from './config/multer.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/api/auth/register', registeredUsuario);
app.post('/api/auth/login', loginUsuario);
app.post('/api/auth/check-email', checkEmail);  // Nueva ruta


const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'No se proporcionó token' });
    }
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;
    jwt.verify(token, DB_SECRET_KEY, (err, decoded) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Token expirado' });
            }
            return res.status(401).json({ message: 'Token inválido' });
        }
        req.user = decoded;
        next();
    });
};

app.get('/api/auth/me', verifyToken, getUsuario);
app.put('/api/auth/update',verifyToken, uploadImage.single('imagen'), updateUsuario, manejarErrorArchivo);
app.get('/api/auth/image/:nombre', verifyToken, getImagen);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});