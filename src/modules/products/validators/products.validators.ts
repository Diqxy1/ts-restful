import { celebrate, Joi, Segments } from 'celebrate';

export const createProductValidator = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
  },
});

export const updateProductValidator = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
  [Segments.BODY]: {
    name: Joi.string().optional(),
    price: Joi.number().optional(),
    quantity: Joi.number().optional(),
  },
});

export const deleteProductValidator = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
});

export const showProductValidator = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
});
