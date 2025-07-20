import prisma from '../config/prisma.js'

export async function attachUser(req, res, next) {
  if (req.session && req.session.user) {
    req.user = req.session.user;
    res.locals.user = req.session.user; // utile dans les vues Twig
  }
  next();
}

export function requireAuth(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  if (req.session.user.isBanned) {
    return req.session.destroy(() => {
      res.redirect('/login?banned=1');
    });
  }
  next();
}

export function isAuthenticated(req, res, next) {
  if (req.user) {
    return next();
  }
  return res.status(401).json({ message: 'Non autorisé' });
}

// Middleware d'authentification pour injecter l'utilisateur connecté dans les vues
const authguard = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
};

export function checkNotBanned(req, res, next) {
  // Vérifie si l'utilisateur est connecté et banni
  if (req.user && req.user.isBanned) {

    return res.status(403).render('banned.twig', {
      message: "Votre compte a été banni. Contactez l'administration si besoin."
    });
  }
  next();
}


export default requireAuth
