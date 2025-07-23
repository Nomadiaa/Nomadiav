import prisma from '../config/prisma.js';

// Récupère et affiche les notifications de l'utilisateur connecté
export async function showNotifications(req, res) {
  const userId = req.user.id;

  // Marque toutes les notifs comme lues AVANT d'afficher
  await prisma.notification.updateMany({
    where: { userId, isRead: false },
    data: { isRead: true }
  });

  const notifications = await prisma.notification.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    include: {
      fromUser: { select: { nom: true, prenom: true, avatar: true } },
      review: true
    }
  });

  res.render('notification.twig', { notifications });
}

// Route pour marquer manuellement toutes les notifs comme lues (optionnel)
export async function markAllNotificationsAsRead(req, res) {
  const userId = req.user.id;
  await prisma.notification.updateMany({
    where: { userId, isRead: false },
    data: { isRead: true }
  });
  res.redirect('/notification');
}

export async function getAllUserNotifications(req, res) {
  const userId = req.user.id;

  // Récupère TOUTES les notifs de l'utilisateur, y compris les rappels
  const notifications = await prisma.notification.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    include: {
      fromUser: true,
      review: true,
      destination: true,
      
    }
  });

  res.render('notifications', { notifications });
}

// Supprimer une notification par son ID
export async function deleteNotification(req, res) {
  const { id } = req.params;

  try {
    await prisma.notification.delete({
      where: { id: Number(id) },
    });

    // Redirige proprement vers la page de notification
    return res.redirect("/notification");
  } catch (error) {
    console.error("Erreur suppression notification :", error);
    res.status(500).send("Erreur lors de la suppression de la notification.");
  }
}
