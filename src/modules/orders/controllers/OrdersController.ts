import { Request, Response } from 'express';
import ShowOrderService from '../services/ShowOrderService';
import CreateOrderService from '../services/CreateOrderService';
import CreateOfferService from '../services/CreateOfferService';
import ShowOfferService from '../services/ShowOfferService';

export default class OrdersController {
  // GET /products/id
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showOrder = new ShowOrderService();

    const order = await showOrder.execute({ id });

    return response.status(302).json(order);
  }

  // GET /products/id
  public async showOffer(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const showOrder = new ShowOfferService();

    const offer = await showOrder.execute({ id });

    return response.status(302).json(offer);
  }

  // POST /products
  public async create(request: Request, response: Response): Promise<Response> {
    const { customer_id, products } = request.body;

    const createOrder = new CreateOrderService();

    const order = await createOrder.execute({ customer_id, products });

    return response.status(201).json(order);
  }

  // POST /products
  public async createOffer(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { customer_id, products } = request.body;

    const createOffer = new CreateOfferService();

    const offer = await createOffer.execute({ customer_id, products });

    return response.status(201).json(offer);
  }
}
