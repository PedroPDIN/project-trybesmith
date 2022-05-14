import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';
import ProductModel from './product.model';

type Order = {
  id: number;
  userId: number;
}

export default class OrderModel {
  public connection: Pool;

  public product: ProductModel;
  
  constructor(connection: Pool) {
    this.connection = connection;
    this.product = new ProductModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const query = 'SELECT * FROM Trybesmith.Orders;';

    const [orders] = await this.connection.execute(query);
    const orderAll = orders as Order[];

    const products = orderAll.map(({ id }) => this.product.getByOrderId(id));
    const resolveProducts = await Promise.all(products);
    const result = orderAll.map((product, index) => (
      {
        ...product,
        productsIds: resolveProducts[index].map((v) => v.id),
      }
    ));
  
    return result;
  }
}