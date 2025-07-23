import express from 'express';
import {
  showAllReviews,
  addReview,
  getRecentReviews,
  getAllReviews,
  toggleLikeReview
} from '../controllers/reviewsController.js';

import { isAuthenticated, requireAuth, attachUser } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Affiche la page complète des avis d'une destination (version Twig)
router.get('/destination/:destinationId/reviews', attachUser, requireAuth, showAllReviews);

// Retourne les avis récents d'une destination (format JSON, pour affichage dynamique)
router.get('/reviews/:destinationId', attachUser, requireAuth, getRecentReviews);

// Retourne tous les avis d'une destination (format JSON, pour scroll infini ou tri)
router.get('/reviews/all/:destinationId', attachUser, requireAuth, getAllReviews);

// Enregistre un nouvel avis (via appel API ou formulaire)
router.post('/reviews', attachUser, requireAuth, addReview);

// Permet d'aimer ou ne plus aimer un avis
router.post('/reviews/:reviewId/like', attachUser, requireAuth, toggleLikeReview);

// Enregistre un nouvel avis (via soumission d'un formulaire HTML)
router.post('/reviews/add', attachUser, requireAuth, addReview);

export default router;
