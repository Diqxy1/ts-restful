import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Order from '../typeorm/entities/Order';
import { OrdersRepository } from '../typeorm/repositories/OrdersRepository';

interface IRequest {
  id: string;
}

class ShowOfferService {
  public async execute({ id }: IRequest): Promise<Order> {
    const ordersRepository = getCustomRepository(OrdersRepository);

    const offer = await ordersRepository.findById(id);

    if (!offer) {
      throw new AppError('Order not found.', 404);
    }

    return offer;
  }
}

export default ShowOfferService;
