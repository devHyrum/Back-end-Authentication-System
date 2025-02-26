import express from 'express';
import authRoutes from './auth.routes.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server is running');
});

router.use('/api/auth', authRoutes);

export default router;
