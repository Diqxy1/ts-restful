import { celebrate, Joi, Segments } from 'celebrate';

export const createUserValidator = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
});
