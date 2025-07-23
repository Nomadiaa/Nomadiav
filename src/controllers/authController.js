import prisma from '../config/prisma.js';
import { hashPassword, comparePassword } from '../utils/hash.js';

// Affiche la page d’inscription
export function renderSignup(req, res) {
  res.render('auth/signup');
}

// Affiche la page de connexion
export function renderLogin(req, res) {
  res.render('auth/login');
}

// Gère l’inscription
export async function handleSignup(req, res) {
  const { nom, prenom, email, password, confirmPassword } = req.body;

  if (!nom || !prenom || !email || !password || !confirmPassword) {
    return res.status(400).send('Tous les champs sont obligatoires.');
  }

  if (password !== confirmPassword) {
    return res.status(400).send('Les mots de passe ne correspondent pas.');
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return res.status(400).send('Un utilisateur avec cet email existe déjà.');
  }

  const hashed = await hashPassword(password);

  await prisma.user.create({
  data: {
    nom,
    prenom,
    email,
    password: hashed,
    role: 'user' // ou 'admin'
  }
});


  res.redirect('/login');
}


export async function handleLogin(req, res) {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    req.session.toast = { type: 'error', message: 'Utilisateur introuvable.' };
    return res.redirect('/login');
  }

  if (user.isBanned) {
    req.session.toast = { type: 'error', message: 'Votre compte a été banni.' };
    return res.redirect('/login');
  }

  const valid = await comparePassword(password, user.password);
  if (!valid) {
    req.session.toast = { type: 'error', message: 'Mot de passe incorrect.' };
    return res.redirect('/login');
  }

  req.session.user = user;
  req.session.role = user.role;

  if (user.role === 'admin') {
    return res.redirect('/dashAdm');
  } else {
    return res.redirect('/userBoard');
  }
}


// Déconnecte l'utilisateur en détruisant la session
export function logoutUser(req, res) {
  req.session.destroy(err => {
    if (err) {
      console.error('Erreur de déconnexion :', err);
      return res.redirect('/'); // ou gérer une page d'erreur
    }
    res.redirect('/login'); // Redirige vers la page de connexion
  });
}
