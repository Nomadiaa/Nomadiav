import express from 'express'
import {
  renderUserBoard,
  renderUserProfile,
  updateUserProfile,
  changePassword,
  deleteAccount,
  updatePrivacy,
  updateAdventurerType,
  addVoyageAndChecklist,
  renderPublicProfile
} from '../controllers/userController.js'

import { requireAuth, attachUser, checkNotBanned } from '../middlewares/authMiddleware.js'

import upload from '../utils/upload.js'
import { addTripToUser } from '../controllers/userController.js';


const router = express.Router()

// 🔐 Page d'accueil utilisateur après login
router.get('/userBoard', attachUser, requireAuth, renderUserBoard)

// 👤 Page profil utilisateur
router.get('/profil', attachUser, requireAuth, renderUserProfile)

// ✏️ Modifier les infos texte ET les images du profil
router.post(
  '/profil/update',
  attachUser,
  requireAuth,
  upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'coverImage', maxCount: 1 }
  ]),
  updateUserProfile
)

// 🔐 Page d'accueil utilisateur après login
router.get('/userBoard', attachUser, requireAuth, checkNotBanned, renderUserBoard);

// 👤 Page profil utilisateur
router.get('/profil', attachUser, requireAuth, checkNotBanned, renderUserProfile);

// ✏️ Modifier le profil
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

// 🔐 Modifier mot de passe
router.post('/profil/password', attachUser, requireAuth, checkNotBanned, changePassword);

// ❌ Supprimer le compte
router.post('/profil/delete', attachUser, requireAuth, checkNotBanned, deleteAccount);

// 👁️ Changer visibilité publique/privée
router.post('/profil/privacy', attachUser, requireAuth, checkNotBanned, updatePrivacy);

// 🌍 Changer type d'aventurier
router.post('/profil/adventurer-type', attachUser, requireAuth, checkNotBanned, updateAdventurerType);

router.post('/add-trip/:destinationId', attachUser, requireAuth, checkNotBanned, addTripToUser);

router.post('/add-voyage/:destinationId', attachUser, requireAuth, checkNotBanned, addVoyageAndChecklist);

router.get('/profil/:id', renderPublicProfile);
export default router
