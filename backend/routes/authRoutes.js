const express = require('express');
const router = express.Router();
const authController = require('./../controllers/authController.js');
const authMiddleware = require('../middlewares/authMiddleware');
const { loginValidator } = require('../validators/authValidator.js');
const handleValidationErrors = require('../middlewares/validate.js');

//CIBERSEGURIDAD-------
const rateLimit = require('express-rate-limit');
// Límite para login
const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutos
  max: 5, // máximo 5 intentos
  message: 'Demasiados intentos de login, intenta más tarde.'
});
//---------------------

// POST http://localhost:3000/api/auth/login
router.post('/login',loginLimiter, loginValidator, handleValidationErrors , authController.login);

// POST http://localhost:3000/auth/refresh
router.post('/refresh', authController.refreshToken);

// POST http://localhost:3000/api/auth/login
router.post('/login', loginValidator, handleValidationErrors, authController.login);
// POST http://localhost:3000/auth/refresh
router.post('/refresh', authController.refreshToken);
// POST http://localhost:3000/auth/logout
router.post('/logout', authMiddleware.authenticate, authController.logout);

module.exports = router;
