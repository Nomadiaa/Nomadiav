import express from 'express';
import { showAllReviews, addReview, getRecentReviews, getAllReviews, toggleLikeReview } from '../controllers/reviewsController.js';
import { isAuthenticated } from '../middlewares/authMiddleware.js';
import { requireAuth, attachUser } from '../middlewares/authMiddleware.js'


const router = express.Router();

// Route affichage page avis complète (Twig)
router.get('/destination/:destinationId/reviews',attachUser,requireAuth, showAllReviews);

// Routes API JSON
router.get('/reviews/:destinationId',attachUser,requireAuth, getRecentReviews);
router.get('/reviews/all/:destinationId',attachUser,requireAuth, getAllReviews);
router.post('/reviews', attachUser, requireAuth, addReview);
router.post('/reviews/:reviewId/like', attachUser, requireAuth, toggleLikeReview);

// POST ajout avis formulaire
router.post('/reviews/add', attachUser, requireAuth, addReview);


export default router;
