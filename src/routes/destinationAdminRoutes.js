import express from 'express'
import { isAdmin } from '../middlewares/isAdmin.js';
import {
  getDestinationById,
  handleAddDestination,
  renderAddDestination,
  handleEditDestination,
  renderEditDestination
} from '../controllers/destinationAdminController.js';
import upload from "../utils/upload.js";

const router = express.Router();

// Affiche le formulaire de modification d'une destination (admin)
router.get('/admin/destinations/edit/:id', isAdmin, renderEditDestination);

// Traite la soumission du formulaire de modification (admin)
router.post('/admin/destinations/edit/:id', isAdmin, upload.any(), handleEditDestination);

// Affiche le formulaire d'ajout de destination (admin)
router.get('/admin/destinations/add', isAdmin, renderAddDestination);

// Traite la soumission du formulaire d'ajout de destination (admin)
router.post('/admin/destinations/add', isAdmin, upload.any(), handleAddDestination);

// Affiche la page publique d'une destination
router.get('/destination/:id', getDestinationById);

export default router;
