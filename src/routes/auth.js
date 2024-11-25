import express from 'express';
const router = express.Router();

// Definir rutas de autenticación
router.post('/register', (req, res) => {
  // Lógica para registrar un usuario
  res.status(200).send('Usuario registrado');
});

router.post('/login', (req, res) => {
  // Lógica para iniciar sesión
  res.status(200).send('Usuario autenticado');
});

export default router;
