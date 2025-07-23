import express from 'express';
import { showAllReviews } from '../controllers/reviewsController.js';
import { requireAuth, attachUser } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Affiche tous les avis pour une destination donnée (accès utilisateur connecté)
router.get('/destination/:destinationId/reviews', attachUser, requireAuth, showAllReviews);

export default router;
