import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import indexRoutes from './routes/index.routes.js';
import swaggerUi from 'swagger-ui-express'
import jsonDocs from './swagger-output.json' assert {type:'json'}

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use('/', indexRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(jsonDocs));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
