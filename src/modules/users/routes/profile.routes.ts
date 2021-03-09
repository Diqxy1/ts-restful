import { Router } from 'express';

import { UpdateUserValidator } from '../validators/users.validators';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import ProfileController from '../controllers/ProfileController';

const profileRouter = Router();

const profileController = new ProfileController();

profileRouter.use(isAuthenticated);

profileRouter.get('/', profileController.show);
profileRouter.put('/', UpdateUserValidator, profileController.update);

export default profileRouter;
