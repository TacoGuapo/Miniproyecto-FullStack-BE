import db from '../config/db.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config.js';

// CREATE
const createUser = async ({ email, password, name, phone, info }) => {
  try {
    const hash = await bcrypt.hash(password, 11);
    const query = 'INSERT INTO usuarios (email, password, name, phone, info) VALUES (?, ?, ?, ?, ?)';
    await db.execute(query, [email, hash, name, phone, info]);
    return { success: true, status: 200, message: 'Usuario creado' };
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return { success: false, status: 409, message: `El correo '${email}' ya está registrado` };
    } else {
      return { success: false, status: 500, message: 'Error interno al crear usuario', error: error.message };
    }
  }
};

// LOGIN
const login = async (email, password) => {
  try {
    const query = 'SELECT * FROM usuarios WHERE email = ?';
    const [response] = await db.query(query, [email]);
    if (response.length === 0) {
      return { success: false, status: 401, message: 'Credenciales inválidas' };
    }
    const user = response[0];
    if (await bcrypt.compare(password, user.password)) {
      delete user.password;
      const token = getToken(user.id_usuarios, user.email);
      return { success: true, status: 200, token, data: user };
    } else {
      return { success: false, status: 401, message: 'Credenciales inválidas' };
    }
  } catch (error) {
    return { success: false, status: 500, message: 'Error interno al iniciar sesión', error: error.message };
  }
};

const getToken = (userId, email) => {
  const token = jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: '1h' });
  return token;
};

// READ
const getUserById = async (userId) => {
  try {
    const query = 'SELECT * FROM usuarios WHERE id_usuarios = ?';
    const [response] = await db.query(query, [userId]);
    if (response.length === 0) {
      return { success: false, status: 404, message: 'Usuario no encontrado' };
    }
    const user = response[0];
    delete user.password;
    return { success: true, status: 200, data: user };
  } catch (error) {
    return { success: false, status: 500, message: 'Error interno al obtener usuario', error: error.message };
  }
};

// UPDATE
const updateUser = async (userId, { email, name, phone, info, password }) => {
  try {
    let query = 'SELECT * FROM usuarios WHERE id_usuarios = ?';
    const [response] = await db.query(query, [userId]);
    if (response.length === 0) {
      return { success: false, status: 404, message: 'Usuario no encontrado' };
    }

    // Construir la consulta dinámica para actualizar solo los campos proporcionados
    const fieldsToUpdate = {};
    if (name) fieldsToUpdate.name = name;
    if (phone) fieldsToUpdate.phone = phone;
    if (info) fieldsToUpdate.info = info;
    if (password) fieldsToUpdate.password = await bcrypt.hash(password, 11);

    const queryParams = Object.keys(fieldsToUpdate).map(key => `${key} = ?`).join(', ');
    const values = Object.values(fieldsToUpdate);
    query = `UPDATE usuarios SET ${queryParams} WHERE id_usuarios = ?`;

    await db.execute(query, [...values, userId]);
    return { success: true, status: 200, message: 'Usuario actualizado' };
  } catch (error) {
    return { success: false, status: 500, message: 'Error interno al actualizar usuario', error: error.message };
  }
};

// DELETE
const deleteUser = async (userId) => {
  try {
    const query = 'DELETE FROM usuarios WHERE id_usuarios = ?';
    await db.execute(query, [userId]);
    return { success: true, status: 200, message: 'Usuario eliminado' };
  } catch (error) {
    return { success: false, status: 500, message: 'Error interno al eliminar usuario', error: error.message };
  }
};

export default {
  createUser,
  login,
  getUserById,
  updateUser,
  deleteUser
};
