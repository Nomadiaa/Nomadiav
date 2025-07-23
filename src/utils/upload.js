import multer from 'multer';
import path from 'path';

// Configuration du stockage des fichiers uploadés
const storage = multer.diskStorage({
  // Dossier de destination des fichiers
  destination: function (req, file, cb) {
    cb(null, './public/uploads/');
  },
  // Génère un nom de fichier unique avec extension
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9) + ext;
    cb(null, uniqueName);
  }
});

// Filtre les fichiers autorisés (images uniquement)
const fileFilter = function (req, file, cb) {
  const allowed = ['.png', '.jpg', '.jpeg', '.webp'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowed.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Seuls les fichiers image (.png, .jpg, .jpeg, .webp) sont autorisés'));
  }
};

// Configuration complète de Multer avec stockage + filtre
const upload = multer({
  storage,
  fileFilter
});

export default upload;
