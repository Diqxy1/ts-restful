import { Router } from 'express';

import ForgotPasswordController from '../controllers/ForgotPasswordController';
import { forgotPasswordValidator } from '../validators/password.validators';

const passwordRouter = Router();

const forgotPasswordController = new ForgotPasswordController();

passwordRouter.post(
  '/forgot',
  forgotPasswordValidator,
  forgotPasswordController.create,
);

export default passwordRouter;
