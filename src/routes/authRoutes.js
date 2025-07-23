import express from 'express';
import {
  renderLogin,
  renderSignup,
  handleSignup,
  handleLogin,
  logoutUser
} from '../controllers/authController.js';

const router = express.Router();

// Affiche la page d'inscription
router.get('/signup', renderSignup);

// Affiche la page de connexion
router.get('/login', renderLogin);

// Traite le formulaire d'inscription
router.post('/signup', handleSignup);

// Traite le formulaire de connexion
router.post('/login', handleLogin);

// Déconnecte l'utilisateur et détruit la session
router.get('/logout', logoutUser);

export default router;
