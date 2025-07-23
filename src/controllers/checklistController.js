import prisma from '../config/prisma.js';


// Création automatique de la checklist lors de l'ajout d'un voyage

export async function createChecklistOnAddTrip(req, res) {
  const userId = req.session.user?.id;
  const voyageId = req.params.id;

  try {
    // Vérifie si la checklist existe déjà pour ce user/voyage
    let checklist = await prisma.checklist.findFirst({
      where: { userId, voyageId }
    });

    if (!checklist) {
      // Si non, la crée avec les catégories par défaut
      checklist = await prisma.checklist.create({
        data: {
          titre: `Check-list pour ce voyage`,
          user: { connect: { id: userId } },
          voyage: { connect: { id: voyageId } },
          categories: {
            create: [
              { titre: 'Formalités administratives', icone: 'id-card' },
              { titre: 'Santé / médical', icone: 'stethoscope' },
              { titre: 'Bagages Essentiels', icone: 'suitcase' },
              { titre: 'Finance et documents', icone: 'credit-card' },
              { titre: 'Rappels personnalisés', icone: 'bell' }
            ]
          }
        }
      });
    }
    res.redirect('/allChecklist');
  } catch (err) {
    console.error('Erreur création checklist:', err);
    res.redirect('/allChecklist');
  }
}


//  Supprimer une checklist complète (catégories, items, UserVoyage associé)

export async function deleteChecklist(req, res) {
  const checklistId = req.params.id;
  try {
    // Récupère toutes les catégories liées à la checklist
    const categories = await prisma.checklistCategory.findMany({
      where: { checklistId },
      select: { id: true }
    });

    // Pour chaque catégorie, supprime tous ses items
    for (const cat of categories) {
      await prisma.checklistItem.deleteMany({ where: { categoryId: cat.id } });
    }

    // Supprime toutes les catégories de la checklist
    await prisma.checklistCategory.deleteMany({ where: { checklistId } });

    // Récupère la checklist pour userId/voyageId
    const checklist = await prisma.checklist.findUnique({ where: { id: checklistId } });
    const userId = checklist?.userId;
    const voyageId = checklist?.voyageId;

    // Supprime la checklist elle-même
    await prisma.checklist.delete({ where: { id: checklistId } });

    // Supprime aussi l'entrée UserVoyage (relation pivot)
    if (userId && voyageId) {
      await prisma.userVoyage.deleteMany({
        where: { userId, destinationId: voyageId }
      });
    }

    res.redirect('/allChecklist');
  } catch (err) {
    console.error('Erreur suppression checklist:', err);
    res.redirect('/allChecklist');
  }
}


//  Afficher une checklist complète (vue détaillée)

export async function getChecklistDetails(req, res) {
  const checklistId = req.params.id;
  try {
    const checklist = await prisma.checklist.findUnique({
      where: { id: checklistId },
      include: {
        voyage: true,
        categories: {
          include: { items: true }
        }
      }
    });
    if (!checklist) return res.redirect('/allChecklist');
    res.render('checklist', { checklist });
  } catch (err) {
    console.error('Erreur affichage checklist:', err);
    res.redirect('/allChecklist');
  }
}


//  Cocher/décocher un item

export async function updateChecklistItem(req, res) {
  const { checklistId, itemId } = req.params;
  try {
    const item = await prisma.checklistItem.findUnique({ where: { id: itemId } });
    if (!item) return res.redirect(`/checklist/${checklistId}`);
    const newState = !item.isChecked;
    await prisma.checklistItem.update({
      where: { id: itemId },
      data: { isChecked: newState }
    });
    res.redirect(`/checklist/${checklistId}`);
  } catch (err) {
    console.error('Erreur toggle item:', err);
    res.redirect(`/checklist/${checklistId}`);
  }
}


//  Ajouter un item personnalisé à une catégorie (avec date de rappel et notification !)

export async function addChecklistItem(req, res) {
  const { checklistId, categoryId } = req.params;
  let { titre, description, reminderDate } = req.body;
  try {
    // Protection sur reminderDate (ne crée pas un date invalide si champ vide)
    let parsedDate = null;
    if (reminderDate && reminderDate.length > 0) {
      parsedDate = new Date(reminderDate);
      if (isNaN(parsedDate)) parsedDate = null;
    }

    // Crée l'item
    const item = await prisma.checklistItem.create({
      data: {
        titre,
        description,
        isChecked: false,
        reminderDate: parsedDate,
        category: { connect: { id: categoryId } }
      }
    });

    // NOTIFICATION DE RAPPEL 
    if (parsedDate) {
      const now = new Date();
      // Si la date de rappel est dans moins de 24h (86400s), on crée une notification directe
      const diffMs = parsedDate - now;
      if (diffMs > 0 && diffMs < 86400 * 1000) {
        // On récupère la checklist et l'user pour la notif
        const checklist = await prisma.checklist.findUnique({
          where: { id: checklistId }
        });

        await prisma.notification.create({
          data: {
            type: 'rappel_checklist',
            userId: checklist.userId,
            checklistItemId: item.id,
            checklistId: checklist.id,
            destinationId: checklist.voyageId,
            isRead: false
          }
        });
      }
    }

    res.redirect(`/checklist/${checklistId}`);
  } catch (err) {
    console.error('Erreur ajout item:', err);
    res.redirect(`/checklist/${checklistId}`);
  }
}


//  Supprimer un item

export async function deleteChecklistItem(req, res) {
  const { checklistId, itemId } = req.params;
  try {
    const item = await prisma.checklistItem.findUnique({ where: { id: itemId } });
    if (!item) return res.redirect(`/checklist/${checklistId}`);
    await prisma.checklistItem.delete({ where: { id: itemId } });
    res.redirect(`/checklist/${checklistId}`);
  } catch (err) {
    console.error('Erreur suppression item:', err);
    res.redirect(`/checklist/${checklistId}`);
  }
}


//  Tout cocher/décocher dans la checklist

export async function toggleAllChecklistItems(req, res) {
  const { checklistId } = req.params;
  const check = req.body.check === 'true';
  try {
    const categories = await prisma.checklistCategory.findMany({
      where: { checklistId },
      include: { items: true }
    });
    for (const cat of categories) {
      for (const item of cat.items) {
        await prisma.checklistItem.update({
          where: { id: item.id },
          data: { isChecked: check }
        });
      }
    }
    res.redirect(`/checklist/${checklistId}`);
  } catch (err) {
    console.error('Erreur tout cocher/décocher:', err);
    res.redirect(`/checklist/${checklistId}`);
  }
}


//  Réinitialiser la checklist (tout décocher)

export async function resetChecklist(req, res) {
  const { checklistId } = req.params;
  try {
    const categories = await prisma.checklistCategory.findMany({
      where: { checklistId },
      include: { items: true }
    });
    for (const cat of categories) {
      for (const item of cat.items) {
        await prisma.checklistItem.update({
          where: { id: item.id },
          data: { isChecked: false }
        });
      }
    }
    res.redirect(`/checklist/${checklistId}`);
  } catch (err) {
    console.error('Erreur reset checklist:', err);
    res.redirect(`/checklist/${checklistId}`);
  }
}


//  Pour la page /allChecklist (récupère toutes les checklists de l'utilisateur)

export async function getAllUserChecklists(req, res) {
  const userId = req.session.user?.id;
  try {
    const checklists = await prisma.checklist.findMany({
      where: { userId },
      include: {
        voyage: true,
        categories: { include: { items: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.render('allChecklist', { checklists });
  } catch (err) {
    console.error('Erreur chargement checklists:', err);
    res.status(500).send('Erreur serveur');
  }
}


//  Ajoute la checklist + UserVoyage au profil

export async function addChecklistAndUserVoyage(req, res) {
  const userId = req.user.id;
  const voyageId = req.params.id;
  try {
    // Ajoute la relation UserVoyage 
    try {
      await prisma.userVoyage.create({
        data: { userId, destinationId: voyageId }
      });
    } catch (err) {
      if (err.code !== 'P2002') {
        console.error('Erreur ajout UserVoyage:', err);
        return res.status(500).send("Erreur lors de l'ajout du voyage au profil");
      }
    }

    // Ajoute la checklist si elle n'existe pas déjà
    let checklist = await prisma.checklist.findFirst({
      where: { userId, voyageId }
    });
    if (!checklist) {
      checklist = await prisma.checklist.create({
        data: {
          titre: `Check-list pour ce voyage`,
          user: { connect: { id: userId } },
          voyage: { connect: { id: voyageId } },
          categories: {
            create: [
              { titre: 'Formalités administratives', icone: 'id-card' },
              { titre: 'Santé / médical', icone: 'stethoscope' },
              { titre: 'Bagages Essentiels', icone: 'suitcase' },
              { titre: 'Finance et documents', icone: 'credit-card' },
              { titre: 'Rappels personnalisés', icone: 'bell' }
            ]
          }
        }
      });
    }
    res.redirect('/profil');
  } catch (err) {
    console.error('Erreur ajout checklist + UserVoyage:', err);
    res.redirect('/profil');
  }
}
