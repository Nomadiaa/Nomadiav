import prisma from '../config/prisma.js'

export async function getDestinationDetails(req, res) {
  const { id } = req.params

  try {
    const destination = await prisma.destination.findUnique({
      where: { id },
      include: {
        sections: {
          orderBy: { ordre: 'asc' },
          include: { images: true }
        }
      }
    })

    if (!destination) {
      return res.status(404).render('404.twig', { message: 'Destination non trouvée' })
    }

    res.render('destinations.twig', { destination })
  } catch (err) {
    console.error('❌ Erreur getDestinationDetails :', err)
    res.status(500).render('error.twig', { message: 'Erreur serveur' })
  }
}

// ✅ Affiche toutes les destinations groupées par continent POUR L'UTILISATEUR CONNECTÉ
export async function getAllDestinationsGrouped(req, res) {
  try {
    
    
    const userId = req.session.user?.id;
    console.log('🧪 Rendering userBoard.twig avec groupedDestinations')

    if (!userId) {
      return res.status(401).render('error.twig', { message: 'Non autorisé' });
    }

    // 🧠 Récupère les destinations de l'utilisateur connecté
    const destinations = await prisma.destination.findMany({
      
      orderBy: { continent: 'asc' },
      select: {
        id: true,
        titre: true,
        pays: true,
        continent: true,
        imagePrincipale: true
      }
    });

    // 🧠 Regroupement par continent
    const grouped = {};

    destinations.forEach(dest => {
  const continent = dest.continent || 'Autres'; // ✅ fallback si null ou vide
  if (!grouped[continent]) {
    grouped[continent] = [];
  }
  grouped[continent].push(dest);
});


    // ✅ Affichage dans la vue
    res.render('userBoard.twig', {
      groupedDestinations: grouped,
      user: req.session.user // optionnel si tu en as besoin dans la vue
    });
  } catch (err) {
    console.error('❌ Erreur récupération destinations :', err);
    res.status(500).render('error.twig', { message: "Erreur serveur" });
  }
}

