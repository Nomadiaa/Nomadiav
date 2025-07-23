// Middleware pour attacher l'utilisateur de la session à req.user et aux vues Twig (res.locals.user)
export async function attachUser(req, res, next) {
  if (req.session && req.session.user) {
    req.user = req.session.user;
    res.locals.user = req.session.user; // utile dans les vues Twig
  }
  next();
}

// Middleware pour exiger qu'un utilisateur soit connecté (et non banni)
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

// Middleware API pour vérifier qu'un utilisateur est authentifié via req.user
export function isAuthenticated(req, res, next) {
  if (req.user) {
    return next();
  }
  return res.status(401).json({ message: 'Non autorisé' });
}

// Middleware générique pour vérifier si un utilisateur est connecté
const authguard = (req, res, next) => {
  if (req.session.user) {
    
    next();
  } else {
    res.redirect('/login');
  }
};

// Middleware pour bloquer l'accès si l'utilisateur est banni
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
