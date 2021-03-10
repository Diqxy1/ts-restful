import { celebrate, Joi, Segments } from 'celebrate';

export const createUserValidator = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    //password: Joi.string().required(),
  },
});

export const UpdateUserValidator = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    old_password: Joi.string(),
    password: Joi.string().optional(),
    password_confirmation: Joi.string()
      .valid(Joi.ref('password'))
      .when('password', { is: Joi.exist(), then: Joi.required() }),
  },
});
