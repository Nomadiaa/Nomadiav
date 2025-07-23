import express from 'express';
import {
  renderUserBoard,
  renderUserProfile,
  updateUserProfile,
  changePassword,
  deleteAccount,
  updatePrivacy,
  updateAdventurerType,
  addVoyageAndChecklist,
  renderPublicProfile,
  renderPublicJournals
} from '../controllers/userController.js';

import { requireAuth, attachUser, checkNotBanned } from '../middlewares/authMiddleware.js';
import upload from '../utils/upload.js';
import { addTripToUser } from '../controllers/userController.js';

const router = express.Router();

// Affiche le tableau de bord utilisateur (après connexion)
router.get('/userBoard', attachUser, requireAuth, checkNotBanned, renderUserBoard);

// Affiche la page profil de l'utilisateur connecté
router.get('/profil', attachUser, requireAuth, checkNotBanned, renderUserProfile);

// Met à jour le profil (texte + avatar + image de couverture)
router.post(
  '/profil/update',
  attachUser,
  requireAuth,
  checkNotBanned,
  upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'coverImage', maxCount: 1 }
  ]),
  updateUserProfile
);

// Met à jour le mot de passe
router.post('/profil/password', attachUser, requireAuth, checkNotBanned, changePassword);

// Supprime définitivement le compte utilisateur
router.post('/profil/delete', attachUser, requireAuth, checkNotBanned, deleteAccount);

// Met à jour la visibilité du profil (public/privé)
router.post('/profil/privacy', attachUser, requireAuth, checkNotBanned, updatePrivacy);

// Met à jour le type d'aventurier sélectionné
router.post('/profil/adventurer-type', attachUser, requireAuth, checkNotBanned, updateAdventurerType);

// Ajoute une destination au profil de l'utilisateur (voyage simple)
router.post('/add-trip/:destinationId', attachUser, requireAuth, checkNotBanned, addTripToUser);

// Ajoute une destination + checklist initiale
router.post('/add-voyage/:destinationId', attachUser, requireAuth, checkNotBanned, addVoyageAndChecklist);

// Affiche le profil public d'un membre (consultation par d'autres)
router.get('/membre/:id', renderPublicProfile);

// Affiche les carnets publics d'un membre
router.get('/membre/:id/carnets', renderPublicJournals);

export default router;
