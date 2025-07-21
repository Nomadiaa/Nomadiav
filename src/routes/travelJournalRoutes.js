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

// 📂 Configuration Multer
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// ✅ Route POST pour créer un carnet (champ : photo[])
router.post('/carnets', upload.array('photo', 10), createTravelJournal);

// ✅ Route GET pour afficher le formulaire de création
router.get('/destination/:id/carnet/new', async (req, res) => {
  const destination = await prisma.destination.findUnique({
    where: { id: req.params.id }
  });

  res.render('user/newCarnet.twig', { destination });
});

// ✅ Route GET pour lire un carnet
router.get('/carnet/:id', showTravelJournal);

// ✅ Route GET pour voir ses propres carnets
router.get('/profil/carnets', getUserJournals);

// ✅ Route GET pour voir tous les carnets d'une destination
router.get('/destination/:id/carnets', renderAllJournalsForDestination);

router.post('/carnet/:id/delete', deleteTravelJournal);


export default router;
