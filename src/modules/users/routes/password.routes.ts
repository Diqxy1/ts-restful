import { Router } from 'express';
import CreateUserController from '../controllers/CreateUserController';

import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';
import {
  forgotPasswordValidator,
  resetPasswordValidator,
} from '../validators/password.validators';

const passwordRouter = Router();

const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();
const createUserController = new CreateUserController();

passwordRouter.post(
  '/forgot/',
  forgotPasswordValidator,
  forgotPasswordController.create,
);

passwordRouter.post(
  '/reset/',
  resetPasswordValidator,
  resetPasswordController.create,
);

passwordRouter.post('/create/', createUserController.create);

export default passwordRouter;
