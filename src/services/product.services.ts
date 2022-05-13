import ProductModel from '../models/product.model';
import connection from '../models/connection';
import { IProduct } from '../interfaces/product.interface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<IProduct[]> {
    const product = await this.model.getAll();
    return product;
  }
}
