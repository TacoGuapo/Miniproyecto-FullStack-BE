import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import authMiddleware from '../middlewares/auth.js';
import { uploadSingle } from '../middlewares/multer.js';

const router = Router();
router.post('/register', userController.createUser);
router.post('/login', userController.login);
router.get('/profile', authMiddleware, userController.getUser);
router.put('/profile', authMiddleware, userController.updateUser);
router.post('/upload', authMiddleware, uploadSingle, userController.uploadImage);

export default router;

