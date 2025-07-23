// Middleware pour restreindre l'accès aux utilisateurs ayant le rôle "admin"
export function isAdmin(req, res, next) {
  if (req.session.user && req.session.user.role === 'admin') {
    return next();
  }
  return res.status(403).send('Accès interdit : admin uniquement.');
}
