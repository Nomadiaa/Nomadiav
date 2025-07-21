// --- routes/notificationRouter.js ---
import express from 'express';
const router = express.Router();

import {
  deleteNotification,
  markAllNotificationsAsRead,
  showNotifications,
  getAllUserNotifications,
} from '../controllers/notificationsController.js';

import { attachUser, requireAuth } from '../middlewares/authMiddleware.js';

// Afficher les notifs
router.get('/notification', attachUser, requireAuth, showNotifications);

// Marquer toutes comme lues
router.get('/notification/read', attachUser, requireAuth, markAllNotificationsAsRead);

// Toutes les notifs
router.get('/notifications', attachUser, requireAuth, getAllUserNotifications);

// ✅ Route suppression d'une notif
router.post('/notifications/:id/delete', attachUser, requireAuth, deleteNotification);

export default router;
