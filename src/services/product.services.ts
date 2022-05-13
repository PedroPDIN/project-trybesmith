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

  public async create(product: IProduct): Promise<IProduct> {
    const newProduct = await this.model.create(product);
    console.log('service', newProduct);
    return newProduct;
  }
}
