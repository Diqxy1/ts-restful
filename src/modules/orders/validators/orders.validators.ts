import { celebrate, Joi, Segments } from 'celebrate';

export const createOrderValidator = celebrate({
  [Segments.BODY]: {
    customer_id: Joi.string().uuid().required(),
    products: Joi.required(),
  },
});

export const showOrderValidator = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});
