import prisma from '../config/prisma.js'
import path from 'path'
import fs from 'fs'
import {
  fetchUserProfile,
  updateUserInfo,
  updateUserPassword,
  removeUser,
  setPrivacy,
  setAdventurerType
} from '../services/userService.js'

// ✅ Affiche la page userBoard avec l'utilisateur connecté ET les destinations groupées par continent
export async function renderUserBoard(req, res) {
  try {
    // console.log('DEBUG renderUserBoard - req.user:', req.user);
    if (!req.user) {
      // console.log('DEBUG renderUserBoard - req.user est undefined !');
    }
    const userId = req.user.id;
    // console.log('DEBUG renderUserBoard - userId:', userId);

    // 🔍 Récupère les données utilisateur (nom, voyages, etc.)
    const user = await fetchUserProfile(userId);
    // console.log('DEBUG renderUserBoard - user profile:', user);

    // 🌍 Récupère toutes les destinations pour les afficher par continent
    const destinations = await prisma.destination.findMany({
      orderBy: { continent: 'asc' },
      select: {
        id: true,
        titre: true,
        pays: true,
        continent: true,
        imagePrincipale: true,
        description: true
      },
    });
    // console.log('DEBUG renderUserBoard - destinations:', destinations.length);

    // 📦 Regroupe les destinations par continent
    const grouped = {};
    destinations.forEach(dest => {
      const continent = dest.continent || 'Autres';
      if (!grouped[continent]) grouped[continent] = [];
      grouped[continent].push(dest);
    });

    // 🖼️ Rendu de la page avec utilisateur et destinations groupées
    res.render('user/userBoard', {
      user,
      groupedDestinations: grouped
    });

  } catch (err) {
    console.error("❌ Erreur renderUserBoard :", err);
    res.status(500).send("Erreur serveur");
  }
}



// 🧑‍💼 Affiche la page profil
export async function renderUserProfile(req, res) {
  try {

    const userId = req.user.id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        userVoyages: {
          include: { destination: true }
        }
      }
    });
    
    res.render('user/profil', { user });
  } catch (err) {
    console.error("❌ Erreur renderUserProfile :", err);
    res.status(500).send("Erreur serveur");
  }
}

// 📷 Upload avatar
export async function uploadAvatar(req, res) {
  try {
    const file = req.file
    if (!file) {
      return res.status(400).send("Aucun fichier reçu pour l'avatar")
    }

    const avatarPath = '/uploads/' + file.filename
    await updateUserInfo(req.user.id, { avatar: avatarPath })

    res.redirect('/profil')
  } catch (err) {
    console.error("❌ Erreur uploadAvatar :", err)
    res.status(500).send("Erreur upload avatar")
  }
}

// 🖼️ Upload image de couverture
export async function uploadCover(req, res) {
  try {
    const file = req.file
    if (!file) {
      return res.status(400).send("Aucun fichier reçu pour la couverture")
    }

    const coverPath = '/uploads/' + file.filename
    await updateUserInfo(req.user.id, { coverImage: coverPath })

    res.redirect('/profil')
  } catch (err) {
    console.error("❌ Erreur uploadCover :", err)
    res.status(500).send("Erreur upload cover")
  }
}

export async function updateUserProfile(req, res) {
  try {
    const userId = req.user.id;

    // 🧼 Si un champ doit être effacé (ex: clearField=instagram)
    if (req.body.clearField) {
      const fieldToClear = req.body.clearField;

      if (['instagram', 'facebook', 'youtube'].includes(fieldToClear)) {
        await prisma.user.update({
          where: { id: userId },
          data: {
            [fieldToClear]: null
          }
        });
      }

      return res.redirect('/profil');
    }

    // ✅ Traitement normal de mise à jour du profil
    const { prenom, nom, bio, instagram, facebook, youtube } = req.body;

    const avatarFile = req.files?.avatar?.[0];
    const coverFile = req.files?.coverImage?.[0];

    await prisma.user.update({
      where: { id: userId },
      data: {
        prenom,
        nom,
        bio,
        instagram,
        facebook,
        youtube,
        avatar: avatarFile ? '/uploads/' + avatarFile.filename : undefined,
        coverImage: coverFile ? '/uploads/' + coverFile.filename : undefined,
      },
    });

    res.redirect('/profil');
  } catch (err) {
    console.error("❌ Erreur updateUserProfile :", err);
    res.status(500).send("Erreur lors de la mise à jour du profil");
  }
}


// 🔐 Change le mot de passe
export async function changePassword(req, res) {
  try {
    const { currentPassword, newPassword } = req.body
    await updateUserPassword(req.user.id, currentPassword, newPassword)
    res.redirect('/profil')
  } catch (err) {
    console.error("❌ Erreur changePassword :", err)
    res.status(400).send("Mot de passe incorrect ou erreur")
  }
}

// ❌ Supprime le compte utilisateur
export async function deleteAccount(req, res) {
  try {
    await removeUser(req.user.id)
    res.redirect('/logout')
  } catch (err) {
    console.error("❌ Erreur deleteAccount :", err)
    res.status(500).send("Erreur lors de la suppression")
  }
}

// 👁️ Modifie la visibilité du profil
export async function updatePrivacy(req, res) {
  try {
    const isPublic = req.body.isPublic === 'on'
    await setPrivacy(req.user.id, isPublic)
    res.redirect('/profil')
  } catch (err) {
    console.error("❌ Erreur updatePrivacy :", err)
    res.status(500).send("Erreur mise à jour visibilité")
  }
}

// 🌍 Change le type d'aventurier
export async function updateAdventurerType(req, res) {
  try {
    const type = req.body.type
    await setAdventurerType(req.user.id, type)
    res.redirect('/profil')
  } catch (err) {
    console.error("❌ Erreur updateAdventurerType :", err)
    res.status(500).send("Erreur mise à jour type")
  }
}

// 📁 src/controllers/userController.js
export async function addTripToUser(req, res) {
  const userId = req.user.id;
  const destinationId = req.params.destinationId;

  try {
    await prisma.user.update({
      where: { id: userId },
      data: {
        voyages: {
          connect: { id: destinationId }
        }
      }
    });

    res.redirect('/profil'); // ou un status JSON si tu préfères l'ajax
  } catch (err) {
    console.error('❌ Erreur ajout voyage :', err);
    res.status(500).send("Erreur serveur");
  }
}

export async function addVoyageToUser(req, res) {
  const userId = req.user.id;
  const destinationId = req.params.destinationId;

  try {
    await prisma.userVoyage.create({
      data: {
        userId,
        destinationId,
      }
    });
    res.redirect('/profil'); // ou autre page de confirmation
  } catch (err) {
    if (err.code === 'P2002') { // entrée déjà existante
      res.redirect('/profil');
    } else {
      console.error('Erreur ajout voyage:', err);
      res.status(500).send('Erreur lors de l\'ajout du voyage');
    }
  }
}

export async function addVoyageAndChecklist(req, res) {
  const userId = req.user.id;
  const destinationId = req.params.destinationId;

  try {
    // Ajoute le voyage à l'utilisateur (UserVoyage)
    await prisma.userVoyage.create({
      data: {
        userId,
        destinationId,
      }
    });
  } catch (err) {
    if (err.code !== 'P2002') { // ignore si déjà existant
      console.error('Erreur ajout voyage:', err);
      return res.status(500).send("Erreur lors de l'ajout du voyage");
    }
  }

  try {
    // Crée une checklist pour ce voyage si elle n'existe pas déjà
    let checklist = await prisma.checklist.findFirst({
      where: { userId, voyageId: destinationId }
    });
    if (!checklist) {
      checklist = await prisma.checklist.create({
        data: {
          titre: `Check-list pour ce voyage`,
          user: { connect: { id: userId } },
          voyage: { connect: { id: destinationId } },
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
    console.error('Erreur création checklist:', err);
    res.redirect('/profil');
  }
}

// Affiche le profil public ou privé d'un autre utilisateur
export async function renderPublicProfile(req, res) {
  const userId = req.params.id;

  // Si l'utilisateur regarde son propre profil, redirige vers /profil
  if (req.user && String(req.user.id) === userId) {
    return res.redirect('/profil');
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      include: {
        userVoyages: { include: { destination: true } }
      }
    });

    if (!user) {
      return res.status(404).render('404.twig', { message: 'Utilisateur introuvable.' });
    }

    // 📘 On récupère ses carnets publics
    const publicJournals = await prisma.travelJournal.findMany({
      where: {
        userId: user.id,
        isPublic: true
      },
      include: {
        destination: true,
        photos: true
      },
      orderBy: { createdAt: 'desc' }
    });

    const isPrivate = !user.isPublic;

    res.render('user/publicProfile', {
      user,
      isPrivate,
      publicJournals
    });

  } catch (err) {
    console.error('❌ Erreur renderPublicProfile :', err);
    res.status(500).send('Erreur lors du chargement du profil public');
  }
}


export async function getUserJournals(req, res) {
  const userId = req.session.user?.id;
  if (!userId) return res.redirect('/login');

  try {
    const journals = await prisma.travelJournal.findMany({
      where: { userId },
      include: {
        destination: true,
        photos: true
      },
      orderBy: { createdAt: 'desc' }
    });

    res.render('user/myCarnets.twig', { journals });
  } catch (err) {
    console.error("Erreur récupération carnets :", err);
    res.status(500).send("Erreur serveur");
  }
}
