import { celebrate, Joi, Segments } from 'celebrate';

export const createSessionValidator = celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
});
