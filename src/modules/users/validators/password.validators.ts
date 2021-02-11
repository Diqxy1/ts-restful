import { celebrate, Joi, Segments } from 'celebrate';

export const forgotPasswordValidator = celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
  },
});
