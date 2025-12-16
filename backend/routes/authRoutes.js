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

/**
 * @swagger
 * /api/auth/refresh:
 *   post:
 *     summary: Refrescar token de acceso
 *     tags: [Autenticación]
 *     responses:
 *       200:
 *         description: Nuevo token generado exitosamente
 *         headers:
 *           X-New-Access-Token:
 *             schema:
 *               type: string
 *             description: Nuevo token de acceso en la cabecera
 *       401:
 *         description: Refresh token inválido o expirado
 */
router.post('/refresh', authController.refreshToken);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Cerrar sesión
 *     tags: [Autenticación]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sesión cerrada exitosamente
 *         headers:
 *           Set-Cookie:
 *             schema:
 *               type: string
 *             description: Cookie de refresh token eliminada
 *       401:
 *         description: No autorizado
 */
router.post('/logout', authMiddleware.authenticate, authController.logout);

module.exports = router;