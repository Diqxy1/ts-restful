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
ordersRouter.get('/:id/', showOrderValidator, ordersController.showOffer);
ordersRouter.post('/', createOrderValidator, ordersController.create);
ordersRouter.post(
  '/offer/',
  createOrderValidator,
  ordersController.createOffer,
);

export default ordersRouter;
