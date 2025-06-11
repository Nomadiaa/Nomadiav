import prisma from '../config/prisma.js'; // ✅ À ne déclarer qu'une seule fois

// Affiche la vue du formulaire d'ajout
export function renderAddDestination(req, res) {
  res.render('admin/addDestination');
}

// Contrôleur pour traiter l’ajout complet (structure simplifiée avec grouped bullet points)


export async function handleAddDestination(req, res) {
  try {
    const { titre, pays, continent, description } = req.body;

    const imagePrincipaleFile = req.files.find(f => f.fieldname === 'imagePrincipale');
    const imagePrincipale = imagePrincipaleFile ? '/uploads/' + imagePrincipaleFile.filename : null;

    const destination = await prisma.destination.create({
      data: {
        titre,
        pays,
        continent,
        description,
        imagePrincipale,
      },
    });

    const sectionsRaw = req.body.sections || [];
    const sections = Array.isArray(sectionsRaw)
      ? sectionsRaw.map(section => (typeof section === 'string' ? JSON.parse(section) : section))
      : [typeof sectionsRaw === 'string' ? JSON.parse(sectionsRaw) : sectionsRaw];

    for (let i = 0; i < sections.length; i++) {
      const sectionData = sections[i];

      // ✅ Création de la section
      const newSection = await prisma.section.create({
        data: {
          titre: sectionData.titre,
          contenu: sectionData.contenu || '',
          ordre: i,
          type: sectionData.type || 'Autre',
          destinationId: destination.id,
        },
      });

      // ✅ Création des bullet points simples
      const bulletPoints = sectionData.bulletPoints || [];
      for (let b = 0; b < bulletPoints.length; b++) {
        await prisma.bulletPoint.create({
          data: {
            contenu: bulletPoints[b],
            ordre: b,
            sectionId: newSection.id,
          },
        });
      }

      // ✅ Création des groupes de bullet points
      const groups = sectionData.groups || [];
      for (let j = 0; j < groups.length; j++) {
        const group = await prisma.groupedBulletPoint.create({
          data: {
            titre: groups[j].titre,
            ordre: j,
            sectionId: newSection.id,
          },
        });

        const contents = groups[j].contenus || [];
        for (let k = 0; k < contents.length; k++) {
          await prisma.bulletPointContent.create({
            data: {
              contenu: contents[k],
              ordre: k,
              groupId: group.id, // ✅ CORRECTION
            },
          });
        }
      }

      // ✅ Images
      const imageFiles = req.files.filter(file => file.fieldname === `sections[${i}][images][]`);
      for (const img of imageFiles) {
        await prisma.image.create({
          data: {
            url: '/uploads/' + img.filename,
            sectionId: newSection.id,
          },
        });
      }
    }

    res.redirect('/dashAdm');
  } catch (err) {
    console.error('❌ Erreur lors de l’ajout complet de la destination :', err);
    res.status(500).send("Erreur lors de l’ajout de la destination");
  }
}


// ✅ Contrôleur : Affiche une destination complète pour l'utilisateur
export async function getDestinationById(req, res) {
  const id = req.params.id;

  try {
    const destination = await prisma.destination.findUnique({
      where: { id },
      include: {
        sections: {
          orderBy: { ordre: 'asc' },
          include: {
            images: true,
            groupedPoints: { // ✅ CORRECT
              orderBy: { ordre: 'asc' },
              include: {
                contents: {
                  orderBy: { ordre: 'asc' }
                }
              }
            },
            bulletPoints: {
              orderBy: { ordre: 'asc' }
            }
          }
        }
      }
    });

    if (!destination) {
      return res.status(404).render('error.twig', { message: 'Destination introuvable' });
    }

    const mainImagePath = destination.imagePrincipale?.startsWith('/uploads/')
      ? destination.imagePrincipale
      : '/uploads/' + destination.imagePrincipale;

    res.render('destination.twig', {
      destination,
      mainImagePath,
    });
  } catch (err) {
    console.error('❌ Erreur affichage destination :', err);
    res.status(500).send("Erreur serveur");
  }
}




// ✅ Affiche toutes les destinations + nombre utilisateurs
export async function showAllDestinations(req, res) {
  try {
    const destinations = await prisma.destination.findMany({
      orderBy: { createdAt: 'desc' },
    });
    const userCount = await prisma.user.count();
    res.render('dashAdm', { destinations, userCount });
  } catch (err) {
    console.error('❌ Erreur récupération dashboard admin :', err);
    res.status(500).send('Erreur serveur');
  }
}

// ✅ Supprime une destination avec toutes ses données liées
export async function deleteDestination(req, res) {
  const id = req.params.id;
  try {
    // 🧱 Récupère toutes les sections de la destination
    const sections = await prisma.section.findMany({
      where: { destinationId: id },
      select: { id: true }
    });
    const sectionIds = sections.map(s => s.id);

    // 🧱 Récupère tous les groupes liés à ces sections
    const groups = await prisma.groupedBulletPoint.findMany({
      where: { sectionId: { in: sectionIds } },
      select: { id: true }
    });
    const groupIds = groups.map(g => g.id);

    // ✅ Supprime les contenus des groupes
    await prisma.bulletPointContent.deleteMany({
      where: { groupId: { in: groupIds } }
    });

    // ✅ Supprime les groupes de bullet points
    await prisma.groupedBulletPoint.deleteMany({
      where: { sectionId: { in: sectionIds } }
    });

    // ✅ Supprime les bullet points normaux
    await prisma.bulletPoint.deleteMany({
      where: { sectionId: { in: sectionIds } }
    });

    // ✅ Supprime les images des sections
    await prisma.image.deleteMany({
      where: { sectionId: { in: sectionIds } }
    });

    // ✅ Supprime les sections (maintenant que tout ce qui y est lié est supprimé)
    await prisma.section.deleteMany({
      where: { destinationId: id }
    });

    // ✅ Supprime la destination
    await prisma.destination.delete({
      where: { id }
    });

    res.redirect('/dashAdm');
  } catch (error) {
    console.error('❌ Erreur suppression destination :', error);
    res.status(500).send('Erreur lors de la suppression');
  }
}


// ✅ Affiche le formulaire de modification avec toutes les données liées
export async function renderEditDestination(req, res) {
  const id = req.params.id;
  try {
    const destination = await prisma.destination.findUnique({
      where: { id },
      include: {
        sections: {
          include: {
            images: true,
            groupedBulletPoints: {
              include: {
                bulletPoints: true
              }
            }
          }
        }
      }
    });

    if (!destination) return res.status(404).send('Destination introuvable');
    res.render('admin/editDestination', { destination });
  } catch (err) {
    console.error('❌ Erreur récupération destination :', err);
    res.status(500).send('Erreur serveur');
  }
}

// ✅ Traite la mise à jour d'une destination
export async function handleEditDestination(req, res) {
  const id = req.params.id;
  const { titre, pays, continent, description } = req.body;
  const imagePrincipaleFile = req.files?.find(f => f.fieldname === 'imagePrincipale');
  const imagePrincipale = imagePrincipaleFile ? '/uploads/' + imagePrincipaleFile.filename : null;

  try {
    const updateData = { titre, pays, continent, description };
    if (imagePrincipale) updateData.imagePrincipale = imagePrincipale;
    await prisma.destination.update({ where: { id }, data: updateData });

    const sectionsRaw = req.body.sections || [];
    const sections = Array.isArray(sectionsRaw) ? sectionsRaw : Object.values(sectionsRaw);

    for (let i = 0; i < sections.length; i++) {
      const sectionData = sections[i];
      let section;

      if (sectionData.id) {
        section = await prisma.section.update({
          where: { id: sectionData.id },
          data: {
            titre: sectionData.titre,
            contenu: sectionData.contenu || '',
            ordre: i,
            type: sectionData.type,
          },
        });
      } else {
        section = await prisma.section.create({
          data: {
            titre: sectionData.titre,
            contenu: sectionData.contenu || '',
            ordre: i,
            type: sectionData.type,
            destinationId: id,
          },
        });
      }

      const groups = sectionData.groups || [];
      for (let j = 0; j < groups.length; j++) {
        const group = await prisma.groupedBulletPoint.create({
          data: {
            titre: groups[j].titre,
            ordre: j,
            sectionId: section.id,
          },
        });

        const contents = groups[j].contenus || [];
        for (let k = 0; k < contents.length; k++) {
          await prisma.bulletPointContent.create({
            data: {
              contenu: contents[k],
              ordre: k,
              groupedBulletPointId: group.id,
            },
          });
        }
      }

      const imagesFiles = req.files?.filter(file => file.fieldname === `sections[${i}][images][]`);
      for (const file of imagesFiles) {
        await prisma.image.create({
          data: {
            url: '/uploads/' + file.filename,
            sectionId: section.id,
          },
        });
      }
    }

    res.redirect('/dashAdm');
  } catch (err) {
    console.error('❌ Erreur mise à jour destination :', err);
    res.status(500).send('Erreur lors de la mise à jour');
  }
}