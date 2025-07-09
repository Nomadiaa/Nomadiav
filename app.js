import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cron from 'node-cron';

import authRoutes from './src/routes/authRoutes.js';
import destinationRoutes from './src/routes/destinationRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';
import destinationAdminRoutes from './src/routes/destinationAdminRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import checklistRoutes from './src/routes/checklistRoutes.js';
import reviewsRoutes from './src/routes/reviewsRoutes.js';
import notificationRoutes from './src/routes/notificationRoutes.js';
import { checkChecklistReminders } from './src/jobs/checkReminders.js';
import adminUserRoutes from './src/routes/adminUserRoutes.js';
import travelJournalRoutes from './src/routes/travelJournalRoutes.js';

import { attachUser } from './src/middlewares/authMiddleware.js';
import { showAllReviews } from './src/controllers/reviewsController.js';

dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

cron.schedule('0 * * * *', async () => { // toutes les heures à XX:00
  try {
    await checkChecklistReminders();
  } catch (e) {
    console.error('[CRON] Erreur lors du check des rappels checklist:', e);
  }
});

// Middleware pour servir fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Parsing POST form & JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Accès images uploadées
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configuration moteur Twig
app.set('view engine', 'twig');
app.set('views', path.join(__dirname, 'src/views'));

// Sessions
app.use(session({
  secret: 'nomadia_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 2 // 2h
  }
}));

// Route d'accueil
app.get('/', (req, res) => {
  res.render('home');
});

// Middleware pour attacher l'utilisateur connecté
app.use(attachUser);

// --- ROUTE SPÉCIALE POUR LA PAGE D’AVIS COMPLÈTE ---
// Accessible via : /destination/:destinationId/reviews
app.get('/destination/:destinationId/reviews', showAllReviews);

// Montée des autres routes sans conflit
app.use('/', authRoutes);
app.use('/', destinationRoutes);
app.use('/', adminRoutes);
app.use('/', destinationAdminRoutes);
app.use('/', userRoutes);
app.use('/', checklistRoutes);
app.use('/', notificationRoutes);
app.use('/', adminUserRoutes)
app.use('/', travelJournalRoutes);

// Routes API prefixées par /api
app.use('/api', reviewsRoutes);

// Lancement serveur
app.listen(3016, () => {
  console.log('✅ Serveur démarré sur le port 3016');
});


