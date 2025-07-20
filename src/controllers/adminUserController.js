// src/controllers/adminUserController.js
import prisma from '../config/prisma.js';

// GET : Liste des utilisateurs
export async function getAllUsers(req, res) {
  try {
    const users = await prisma.user.findMany({
      where: { role: 'user' }, // Ne récupère que les users normaux
      orderBy: { createdAt: 'desc' }
    });
    res.render('admin/adminUserView.twig', { users });

  } catch (err) {
    console.error('Erreur getAllUsers:', err);
    res.status(500).send("Erreur serveur");
  }
}

// POST : Supprimer un utilisateur par son ID
export async function deleteUserById(req, res) {
  const { userId } = req.params;
  console.log('Suppression utilisateur, userId =', userId, typeof userId);

  if (!userId || isNaN(Number(userId))) {
    console.error('ID utilisateur invalide pour suppression:', userId);
    return res.status(400).send("ID utilisateur invalide");
  }

  try {
    await prisma.user.delete({
      where: { id: Number(userId) }
    });
    res.redirect('/admin/adminUserView');
  } catch (err) {
    console.error('Erreur deleteUser:', err);
    res.status(500).send("Erreur lors de la suppression");
  }
}

// GET : Afficher le profil complet d’un utilisateur pour l’admin
export async function viewUserProfile(req, res) {
  const { userId } = req.params;

  if (!userId || isNaN(Number(userId))) {
    return res.status(400).send("ID utilisateur invalide.");
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      include: {
        userVoyages: {
          include: {
            destination: true  // ✅ Inclusion des infos de la destination
          }
        },
        checklists: true
      }
    });

    if (!user) {
      return res.status(404).render('404.twig', { message: "Utilisateur introuvable" });
    }

    res.render('admin/adminUserProfile.twig', { user });

  } catch (err) {
    console.error('Erreur viewUserProfile:', err);
    res.status(500).send("Erreur lors de l'affichage du profil utilisateur");
  }
}

// Affiche tous les avis d’une destination pour l’admin
export async function viewDestinationReviews(req, res) {
  const { destinationId } = req.params;
  try {
    const destination = await prisma.destination.findUnique({
      where: { id: destinationId },
      select: { titre: true }
    });
    const reviews = await prisma.review.findMany({
      where: { destinationId },
      include: {
        user: true,
        likes: true,
      },
      orderBy: { createdAt: 'desc' }
    });
    res.render('admin/adminDestinationReviews.twig', { destination, reviews, destinationId });
  } catch (err) {
    res.status(500).send("Erreur serveur");
  }
}

// Pour supprimer un avis
export async function deleteReview(req, res) {
  const { reviewId } = req.params;
  const { destinationId } = req.body;



  if (!reviewId || !destinationId) {
    return res.status(400).send("ID de l'avis ou de la destination manquant.");
  }

  try {
    await prisma.review.delete({
      where: { id: reviewId } // ⚠️ Pas Number si ID est un String (ex: cuid)
    });
    res.redirect(`/admin/destinations/${destinationId}/reviews`);
  } catch (err) {
    console.error('❌ Erreur deleteReview:', err);
    res.status(500).send("Erreur lors de la suppression de l'avis");
  }
}


// Bannir un utilisateur par son ID
export async function banUser(req, res) {
  const { userId } = req.params;
  const { destinationId } = req.body; // pour la redirection

  // Empêcher de bannir l’admin (ou soi-même, si tu veux)
  if (req.session.user && Number(userId) === req.session.user.id) {
    return res.status(403).send("Impossible de se bannir soi-même.");
  }

  try {
    await prisma.user.update({
      where: { id: Number(userId) },
      data: { isBanned: true }
    });
    res.redirect(`/admin/destinations/${destinationId}/reviews`);
  } catch (err) {
    console.error('Erreur banUser:', err);
    res.status(500).send("Erreur lors du bannissement");
  }
}

// Débannir un utilisateur
export async function unbanUser(req, res) {
  const { userId } = req.params;
  await prisma.user.update({
    where: { id: Number(userId) },
    data: { isBanned: false }
  });
  res.redirect('/admin/adminUserView');
}

// POST /admin/users/:userId/ban  (depuis la liste utilisateurs)
export async function banUserFromList(req, res) {
  const { userId } = req.params;

  // Empêche de bannir l’admin (ou soi-même)
  if (req.session.user && Number(userId) === req.session.user.id) {
    return res.status(403).send("Impossible de se bannir soi-même.");
  }

  try {
    await prisma.user.update({
      where: { id: Number(userId) },
      data: { isBanned: true }
    });
    res.redirect('/admin/adminUserView'); // 👈 Redirection vers la liste utilisateurs
  } catch (err) {
    console.error('Erreur banUserFromList:', err);
    res.status(500).send("Erreur lors du bannissement");
  }
}

// Même chose pour unban
export async function unbanUserFromList(req, res) {
  const { userId } = req.params;
  try {
    await prisma.user.update({
      where: { id: Number(userId) },
      data: { isBanned: false }
    });
    res.redirect('/admin/adminUserView');
  } catch (err) {
    console.error('Erreur unbanUserFromList:', err);
    res.status(500).send("Erreur lors du débannissement");
  }
}

