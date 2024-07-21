// En src/middlewares/multer.js

import multer from 'multer';
import path from 'path';

// Configuración de Multer para almacenar archivos en el directorio 'uploads'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directorio donde se almacenarán los archivos subidos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, uniqueSuffix + extension); // Nombre del archivo con sufijo único
  }
});

// Función para filtrar los tipos de archivos permitidos (en este caso, imágenes)
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true); // Aceptar archivo
  } else {
    cb(new Error('Solo se permiten archivos de imagen'), false); // Rechazar archivo
  }
};

// Configuración de Multer con las opciones definidas
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5 // Limitar tamaño del archivo a 5MB (opcional)
  }
});

// Middleware para procesar la carga de una sola imagen
export const uploadSingle = upload.single('image');

// Función para eliminar un archivo del sistema de archivos
export const deleteFile = (filePath) => {
  // Implementa la lógica para eliminar el archivo en el sistema de archivos
  // Puedes utilizar fs.unlinkSync(filePath) u otra lógica adecuada aquí
};

export default upload;

