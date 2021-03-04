import { Router } from 'express';

import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';
import {
  forgotPasswordValidator,
  resetPasswordValidator,
} from '../validators/password.validators';

const passwordRouter = Router();

const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

passwordRouter.post(
  '/forgot',
  forgotPasswordValidator,
  forgotPasswordController.create,
);

passwordRouter.post(
  '/reset',
  resetPasswordValidator,
  resetPasswordController.create,
);

export default passwordRouter;
