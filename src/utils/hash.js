import bcrypt from 'bcryptjs';

// Hash le mot de passe en ajoutant un sel (salt)
export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);           // Génère un salt avec un facteur de complexité de 10
  return bcrypt.hash(password, salt);              // Retourne le mot de passe hashé
}

// Compare un mot de passe en clair avec un mot de passe hashé
export async function comparePassword(input, hashed) {
  return bcrypt.compare(input, hashed);            // Retourne true si correspondance, sinon false
}
