import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import indexRoutes from './routes/index.routes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use('/', indexRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
