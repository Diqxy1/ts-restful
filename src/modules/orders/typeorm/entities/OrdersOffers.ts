import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Order from './Order';
import Product from '@modules/products/typeorm/entities/Product';

export enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity('offers_products')
class OffersProducts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;

  @Column({ type: 'enum', enum: Status, nullable: false })
  status: Status;

  @Column({ name: 'offer_time' })
  offerTime: string;

  @ManyToOne(() => Order, order => order.offer_products)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => Product, product => product.order_products)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column()
  order_id: string;

  @Column()
  product_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default OffersProducts;
