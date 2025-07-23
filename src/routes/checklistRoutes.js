import express from 'express';
import { 
  createChecklistOnAddTrip,
  getChecklistDetails,
  updateChecklistItem,
  addChecklistItem,
  deleteChecklistItem,
  toggleAllChecklistItems,
  resetChecklist,
  getAllUserChecklists,
  addChecklistAndUserVoyage
} from '../controllers/checklistController.js';
import { deleteChecklist } from '../controllers/checklistController.js';
import { requireAuth, attachUser } from '../middlewares/authMiddleware.js'


const router = express.Router();

// suprimmer une checklist complète
router.post('/checklist/:id/delete',attachUser, requireAuth, deleteChecklist);

// Créer une checklist lors de l'ajout d'un voyage
router.post('/checklist/:id',attachUser, requireAuth, createChecklistOnAddTrip);

// Afficher une checklist complète
router.get('/checklist/:id',attachUser, requireAuth, getChecklistDetails);

// Cocher/décocher un item
router.post('/checklist/:checklistId/item/:itemId/toggle',attachUser, requireAuth, updateChecklistItem);

// Ajouter un item personnalisé à une catégorie
router.post('/checklist/:checklistId/category/:categoryId/item/add',attachUser, requireAuth, addChecklistItem);

// Supprimer un item
router.post('/checklist/:checklistId/item/:itemId/delete',attachUser , requireAuth, deleteChecklistItem);

// Tout cocher/décocher dans une checklist
router.post('/checklist/:checklistId/toggle-all',attachUser, requireAuth, toggleAllChecklistItems);

// Réinitialiser la checklist (tout décocher)
router.post('/checklist/:checklistId/reset',attachUser ,requireAuth, resetChecklist);

// Voir toutes les checklists de l'utilisateur
router.get('/allChecklist',attachUser, requireAuth, getAllUserChecklists);

// Ajouter une checklist et un voyage
router.post('/add-checklist-and-voyage/:id', attachUser, requireAuth, addChecklistAndUserVoyage);

export default router;
