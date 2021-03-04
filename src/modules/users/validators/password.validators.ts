import { celebrate, Joi, Segments } from 'celebrate';

export const forgotPasswordValidator = celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
  },
});

export const resetPasswordValidator = celebrate({
  [Segments.BODY]: {
    token: Joi.string().uuid().required(),
    password: Joi.string().required(),
    password_confirmation: Joi.string().required().valid(Joi.ref('password')),
  }
})
