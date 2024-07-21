import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config.js';
import userModel from '../models/user.model.js';

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Suponiendo que el token JWT está en el header Authorization
  if (!token) {
    return res.status(401).json({ success: false, status: 401, message: 'No se proporcionó token de autenticación' });
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const userId = decodedToken.userId;
    const result = await userModel.getUserById(userId);
    if (!result.success) {
      return res.status(404).json({ success: false, status: 404, message: 'Usuario no encontrado' });
    }
    req.auth = { userId };
    next();
  } catch (error) {
    return res.status(401).json({ success: false, status: 401, message: 'Token de autenticación inválido' });
  }
};

export default authMiddleware;
