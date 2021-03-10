import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import OrdersController from '../controllers/OrdersController';
import {
  createOrderValidator,
  showOrderValidator,
} from '../validators/orders.validators';

const ordersRouter = Router();

const ordersController = new OrdersController();

ordersRouter.use(isAuthenticated);

ordersRouter.get('/:id/', showOrderValidator, ordersController.show);
ordersRouter.post('/', createOrderValidator, ordersController.create);

export default ordersRouter;
