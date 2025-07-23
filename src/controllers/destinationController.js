import prisma from '../config/prisma.js';

export async function getDestinationDetails(req, res) {
  const destinationId = req.params.id;
  const userId = req.session.user?.id;

  if (!destinationId || typeof destinationId !== 'string') {
    return res.status(400).render('error.twig', { message: 'ID de destination invalide.' });
  }

  try {
    const destination = await prisma.destination.findUnique({
      where: { id: destinationId },
      include: {
        sections: {
          orderBy: { ordre: 'asc' },
          include: {
            images: true,
            groupedPoints: {
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
      return res.status(404).render('404.twig', { message: 'Destination non trouvée' });
    }

    let alreadyPlanned = false;
    if (userId) {
      const checklist = await prisma.checklist.findFirst({
        where: { userId, voyageId: destinationId }
      });
      alreadyPlanned = !!checklist;
    }

    const lastTwoReviews = await prisma.review.findMany({
      where: { destinationId },
      orderBy: { createdAt: 'desc' },
      take: 2,
      include: {
        user: { select: { id: true, nom: true, prenom: true, avatar: true } },
        likes: true
      }
    });

const travelJournals = await prisma.travelJournal.findMany({
  where: {
    destinationId,
    isPublic: true
  },
  include: {
    user: { select: { id: true, nom: true, prenom: true } },
    photos: true
  },
  orderBy: { createdAt: 'desc' },
  take: 2 
});


    const mainImagePath = destination.imagePrincipale?.startsWith('/uploads/')
      ? destination.imagePrincipale
      : '/uploads/' + destination.imagePrincipale;

    res.render('destinations.twig', {
      destination,
      mainImagePath,
      alreadyPlanned,
      lastTwoReviews,
      travelJournals,
      user: req.session.user
    });

  } catch (err) {
    console.error('Erreur getDestinationDetails :', err);
    res.status(500).render('error.twig', { message: 'Erreur serveur' });
  }
}



// Affiche toutes les destinations groupées par continent POUR L'UTILISATEUR CONNECTÉ
export async function getAllDestinationsGrouped(req, res) {
  try {
    const user = req.session.user; // Récupère l'utilisateur connecté
    const userId = user?.id;
    console.log('🧪 Rendering userBoard.twig avec groupedDestinations')

    if (!userId) {
      return res.status(401).render('error.twig', { message: 'Non autorisé' })
    }

    const destinations = await prisma.destination.findMany({
      orderBy: { continent: 'asc' },
      select: {
        id: true,
        titre: true,
        pays: true,
        continent: true,
        imagePrincipale: true,
      },
    })

    const grouped = {}

    destinations.forEach(dest => {
      const continent = dest.continent || 'Autres'
      if (!grouped[continent]) grouped[continent] = []
      grouped[continent].push(dest)
    })

    res.render('userBoard.twig', {
      groupedDestinations: grouped,
      user, // Passe l'utilisateur à la vue
    })
  } catch (err) {
    console.error('Erreur récupération destinations :', err)
    res.status(500).render('error.twig', { message: 'Erreur serveur' })
  }
}

export function attachUser(req, res, next) {
  if (req.session && req.session.user) {
    req.user = req.session.user;
    res.locals.user = req.session.user;
  }
  next();
}

// Affiche toutes les destinations d’un continent
export async function getContinentDestinations(req, res) {
  const { continent } = req.params;
  const user = req.session.user;

  try {
    // On récupère toutes les destinations du continent demandé
    const destinations = await prisma.destination.findMany({
      where: { continent },
      orderBy: { titre: 'asc' },
      select: {
        id: true,
        titre: true,
        pays: true,
        continent: true,
        imagePrincipale: true,
        description: true,
      }
    });

    res.render('continentDestination.twig', {
      continent,
      destinations,
      user
    });
  } catch (err) {
    console.error('Erreur getContinentDestinations :', err);
    res.status(500).render('error.twig', { message: 'Erreur serveur' });
  }
}
