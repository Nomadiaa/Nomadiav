import express from 'express';
import { getAllDestinationsGrouped, getDestinationDetails, getContinentDestinations } from '../controllers/destinationController.js';
import { requireAuth, attachUser } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Affiche toutes les destinations regroupées par continent
router.get('/destinations', attachUser, requireAuth, getAllDestinationsGrouped);

// Affiche les détails d'une destination spécifique
router.get('/destination/:id', attachUser, requireAuth, getDestinationDetails);

// Affiche les destinations d'un continent donné
router.get('/continent/:continent', attachUser, requireAuth, getContinentDestinations);

export default router;
