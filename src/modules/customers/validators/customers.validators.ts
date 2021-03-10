import { celebrate, Joi, Segments } from 'celebrate';

export const createCustomerValidator = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  },
});

export const updateCustomerValidator = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
  [Segments.BODY]: {
    name: Joi.string().optional(),
    email: Joi.string().email().optional(),
  },
});

export const deleteCustomerValidator = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
});

export const showCustomerValidator = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
});
