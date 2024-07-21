import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/user.model.js';
import { JWT_SECRET } from '../config/config.js';

const createUser = async (req, res) => {
  const { email, password, name, phone, info } = req.body;
  try {
    const hash = await bcrypt.hash(password, 11);
    const result = await userModel.createUser({ email, password: hash, name, phone, info });
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json({ success: false, status: 500, message: 'Error interno al crear usuario', error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await userModel.login(email, password);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json({ success: false, status: 500, message: 'Error interno al iniciar sesión', error: error.message });
  }
};

const getUser = async (req, res) => {
  const { userId } = req.auth; // Suponiendo que el middleware de autenticación guarda userId en req.auth
  try {
    const result = await userModel.getUserById(userId);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json({ success: false, status: 500, message: 'Error interno al obtener usuario', error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { userId } = req.auth; // Suponiendo que el middleware de autenticación guarda userId en req.auth
  const { email, name, phone, info, password } = req.body;
  try {
    const result = await userModel.updateUser(userId, { email, name, phone, info, password });
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json({ success: false, status: 500, message: 'Error interno al actualizar usuario', error: error.message });
  }
};

const uploadImage = async (req, res) => {
  const { userId } = req.auth; // Suponiendo que el middleware de autenticación guarda userId en req.auth
  const filename = req.file.filename; // El nombre del archivo subido debería estar disponible en req.file.filename
  try {
    const result = await userModel.uploadImage(userId, filename);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json({ success: false, status: 500, message: 'Error interno al subir imagen', error: error.message });
  }
};

export default {
  createUser,
  login,
  getUser,
  updateUser,
  uploadImage,
};
