import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import UsersController from '../controllers/UsersController';
import { createUserValidator } from '../validators/users.validators';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import UserAvatarController from '../controllers/UserAvatarController';
import CreateUserController from '../controllers/CreateUserController';

const usersRouter = Router();

const usersController = new UsersController();
const usersAvatarController = new UserAvatarController();
const createUserController = new CreateUserController();

const upload = multer(uploadConfig);

usersRouter.get('/', isAuthenticated, usersController.index);
usersRouter.post('/', createUserValidator, usersController.create);
usersRouter.patch(
  '/avatar/',
  isAuthenticated,
  upload.single('avatar'),
  usersAvatarController.update,
);
usersRouter.post('/create', createUserController.create);

export default usersRouter;
