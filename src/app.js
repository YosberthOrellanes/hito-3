import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.js'; 
import shoesRoutes from './routes/shoes.js'; 
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/auth', authRoutes);  // Registrar las rutas de autenticación
app.use('/shoes', shoesRoutes); // Rutas para los zapatos

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app; 
