import prisma from '../config/prisma.js';

// 📘 Création d’un carnet de voyage
export async function createTravelJournal(req, res) {
  const userId = req.session.user?.id;
  if (!userId) return res.status(401).send("Non connecté");

  const {
    titre,
    contenu,
    note,
    dateDebut,
    dateFin,
    destinationId,
    isPublic,
    tags
  } = req.body;

  const uploadedPhotos = Array.isArray(req.files)
    ? req.files.map(file => ({
        url: '/uploads/' + file.filename,
        alt: file.originalname
      }))
    : [];

  const tagsToCreate = typeof tags === 'string'
    ? tags.split(',').map(t => ({ label: t.trim() })).filter(t => t.label.length > 0)
    : [];

  try {
    const newJournal = await prisma.travelJournal.create({
      data: {
        titre,
        contenu,
        note: Number(note),
        dateDebut: new Date(dateDebut),
        dateFin: new Date(dateFin),
        isPublic: isPublic === 'on',
        destinationId,
        userId,
        photos: {
          create: uploadedPhotos
        },
        tags: {
          create: tagsToCreate
        }
      }
    });

    res.redirect(`/carnet/${newJournal.id}`);
  } catch (error) {
    console.error("❌ Erreur création carnet:", error);
    res.status(500).send("Erreur lors de la création du carnet de voyage");
  }
}

// 📖 Afficher un carnet (lecture)
export async function showTravelJournal(req, res) {
  const journalId = req.params.id;

  const journal = await prisma.travelJournal.findUnique({
    where: { id: journalId },
    include: {
      user: true,
      destination: true,
      photos: true,
      tags: true
    }
  });

  if (!journal) return res.status(404).send("Carnet introuvable");

  res.render('user/showCarnet.twig', { journal });
}

// 📚 Afficher tous les carnets d'une destination
export async function renderAllJournalsForDestination(req, res) {
  const destinationId = req.params.id;

  const destination = await prisma.destination.findUnique({
    where: { id: destinationId },
    include: {
      travelJournals: {
        include: {
          user: true,
          photos: true
        }
      }
    }
  });

  if (!destination) return res.status(404).send("Destination introuvable");

  res.render('user/allCarnets.twig', {
    destination,
    journals: destination.travelJournals
  });
}
