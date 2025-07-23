import express from 'express';
import { isAdmin } from '../middlewares/isAdmin.js';
import {
  getAllUsers,
  deleteUserById,
  viewUserProfile,
  viewDestinationReviews,
  deleteReview,
  banUser,
  unbanUser,
  banUserFromList,
  unbanUserFromList
} from '../controllers/adminUserController.js';

import upload from '../utils/upload.js';

const router = express.Router();

// Affiche la liste de tous les utilisateurs
router.get('/admin/adminUserView', isAdmin, getAllUsers);

// Affiche le profil d’un utilisateur spécifique
router.get('/admin/users/:userId', isAdmin, viewUserProfile);

// Supprime un utilisateur
router.post('/admin/users/delete/:userId', isAdmin, deleteUserById);

// Affiche les avis d’une destination
router.get('/admin/destinations/:destinationId/reviews', isAdmin, viewDestinationReviews);

// Supprime un avis utilisateur
router.post('/admin/reviews/:reviewId/delete', isAdmin, deleteReview);

// Bannit un utilisateur depuis un avis
router.post('/admin/users/:userId/ban', isAdmin, banUser);

// Débannit un utilisateur depuis un avis
router.post('/admin/users/:userId/unban', isAdmin, unbanUser);

// Bannit un utilisateur depuis la liste des utilisateurs
router.get('/admin/users/:userId/ban-from-list', isAdmin, banUserFromList);

// Débannit un utilisateur depuis la liste des utilisateurs
router.get('/admin/users/:userId/unban-from-list', isAdmin, unbanUserFromList);

export default router;
