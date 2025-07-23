import express from 'express';
import multer from 'multer';
import prisma from '../config/prisma.js';
import {
  createTravelJournal,
  deleteTravelJournal,
  renderAllJournalsForDestination,
  showTravelJournal
} from '../controllers/travelJournalController.js';
import { getUserJournals } from '../controllers/userController.js';

const router = express.Router();

// Configuration de Multer pour l'upload des photos
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// Enregistre un nouveau carnet de voyage (avec plusieurs photos)
router.post('/carnets', upload.array('photo', 10), createTravelJournal);

// Affiche le formulaire de création de carnet pour une destination
router.get('/destination/:id/carnet/new', async (req, res) => {
  const destination = await prisma.destination.findUnique({
    where: { id: req.params.id }
  });

  res.render('user/newCarnet.twig', { destination });
});

// Affiche un carnet de voyage en détail
router.get('/carnet/:id', showTravelJournal);

// Affiche tous les carnets de l'utilisateur connecté
router.get('/profil/carnets', getUserJournals);

// Affiche tous les carnets liés à une destination
router.get('/destination/:id/carnets', renderAllJournalsForDestination);

// Supprime un carnet de voyage
router.post('/carnet/:id/delete', deleteTravelJournal);

export default router;
