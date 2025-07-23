import prisma from "../config/prisma.js";

// Récupérer les derniers avis d'une destination
export async function getRecentReviews(req, res) {
  const { destinationId } = req.params;
  const limit = parseInt(req.query.limit) || 3;

  try {
    const reviews = await prisma.review.findMany({
      where: { destinationId },
      orderBy: { createdAt: "desc" },
      take: limit,
      include: {
        user: {
          select: { id: true, nom: true, prenom: true, avatar: true }
        },
        likes: true
      }
    });
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur lors de la récupération des avis" });
  }
}

// Récupérer tous les avis d'une destination
export async function getAllReviews(req, res) {
  const { destinationId } = req.params;

  try {
    const reviews = await prisma.review.findMany({
      where: { destinationId },
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: { id: true, nom: true, prenom: true, avatar: true }
        },
        likes: true
      }
    });
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur lors de la récupération des avis" });
  }
}

// Liker ou retirer le like d'un avis
export async function toggleLikeReview(req, res) {
  const userId = req.session.user?.id || req.user?.id; 
  const { reviewId } = req.params;

  if (!userId) {
    return res.status(401).json({ message: "Non autorisé" });
  }

  try {
    // Récupérer l'avis pour vérifier l'auteur
    const review = await prisma.review.findUnique({
      where: { id: reviewId }
    });

    if (!review) {
      return res.status(404).json({ message: "Avis non trouvé" });
    }

    // Interdire à l'auteur de liker son propre avis
    if (review.userId === userId) {
      return res.status(403).json({ message: "Vous ne pouvez pas liker votre propre avis" });
    }

    // Chercher si le like existe déjà
    const existingLike = await prisma.reviewLike.findUnique({
      where: {
        userId_reviewId: {
          userId,
          reviewId,
        }
      }
    });

    if (existingLike) {
      await prisma.reviewLike.delete({
        where: { id: existingLike.id }
      });
      // Supprime la notification associée
      await prisma.notification.deleteMany({
        where: {
          type: 'like',
          userId: review.userId,
          fromUserId: userId,
          reviewId: review.id
        }
      });
      return res.json({ liked: false });
    } else {
      await prisma.reviewLike.create({
        data: {
          userId,
          reviewId,
        }
      });

      // Crée la notif sauf si le likeur est l’auteur lui-même
      if (userId !== review.userId) {
        await prisma.notification.create({
          data: {
            type: 'like',
            userId: review.userId,       // destinataire
            fromUserId: userId,          // celui qui a liké
            reviewId: review.id
          }
        });
      }
      return res.json({ liked: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur lors de la modification du like" });
  }
}


// Route page complète des avis pour une destination
export async function showAllReviews(req, res) {
    const { destinationId } = req.params;

    try {
        const reviews = await prisma.review.findMany({
            where: { destinationId},
            orderBy: { createdAt: "desc"},
            include:{
                user: {
                    select: {id: true, nom: true, prenom: true, avatar: true}
                },
                likes: true,
            }
        });
        res.render('user/fullReviews.twig', {reviews, destinationId});
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur')
    }
}


export async function addReview(req, res) {
  const userId = req.session.user?.id;
  const { destinationId, rating, content } = req.body;

  if (!userId) {
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      return res.status(401).json({ message: "Non autorisé" });
    } else {
      return res.redirect('/login'); 
    }
  }

  if (!destinationId || !rating || !content) {
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      return res.status(400).json({ message: "Champs manquants" });
    } else {
      return res.status(400).send("Champs manquants");
    }
  }

  try {
    const newReview = await prisma.review.create({
      data: {
        userId,
        destinationId,
        rating: parseInt(rating, 10),
        content,
      }
    });

    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      return res.status(201).json(newReview);
    } else {
      return res.redirect(`/destination/${destinationId}/reviews`);
    }
  } catch (error) {
    console.error(error);
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      return res.status(500).json({ message: "Erreur serveur lors de l'ajout de l'avis" });
    } else {
      return res.status(500).send("Erreur serveur");
    }
  }
}

