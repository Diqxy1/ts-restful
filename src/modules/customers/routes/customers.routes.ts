import { Router } from 'express';

import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import CustomersController from '../controllers/CustomersController';
import {
  createCustomerValidator,
  deleteCustomerValidator,
  showCustomerValidator,
  updateCustomerValidator,
} from '../validators/customers.validators';

const customersRouter = Router();

const customersController = new CustomersController();

customersRouter.use(isAuthenticated);

customersRouter.get('/', customersController.index);
customersRouter.get('/:id/', showCustomerValidator, customersController.show);
customersRouter.post('/', createCustomerValidator, customersController.create);
customersRouter.put(
  '/:id/',
  updateCustomerValidator,
  customersController.update,
);
customersRouter.delete(
  '/:id/',
  deleteCustomerValidator,
  customersController.delete,
);

export default customersRouter;
