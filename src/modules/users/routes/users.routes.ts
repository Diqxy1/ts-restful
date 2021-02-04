import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import { createUserValidator } from '../validators/users.validators';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.get('/', isAuthenticated, usersController.index);
usersRouter.post('/', createUserValidator, usersController.create);

export default usersRouter;
