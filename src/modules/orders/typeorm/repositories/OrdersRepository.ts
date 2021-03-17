import { EntityRepository, Repository } from 'typeorm';

import Order from '../entities/Order';
import Customer from '@modules/customers/typeorm/entities/Customer';
import { Status } from '../entities/OrdersOffers';

interface IProduct {
  product_id: string;
  price: number;
  quantity: number;
}

interface IRequest {
  customer: Customer;
  products: IProduct[];
}

interface IProductOffer {
  product_id: string;
  quantity: number;
  offerTime: string;
  status: Status;
}

interface IOffer {
  customer: Customer;
  products: IProductOffer[];
}

@EntityRepository(Order)
export class OrdersRepository extends Repository<Order> {
  public async findById(id: string): Promise<Order | undefined> {
    const order = this.findOne(id, {
      relations: ['order_products', 'customer', 'offer_products'],
    });

    return order;
  }

  public async createOrder({ customer, products }: IRequest): Promise<Order> {
    const order = this.create({
      customer,
      order_products: products,
    });

    await this.save(order);

    return order;
  }

  public async createOffer({ customer, products }: IOffer): Promise<Order> {
    const order = this.create({
      customer,
      offer_products: products,
    });

    await this.save(order);

    return order;
  }
}
