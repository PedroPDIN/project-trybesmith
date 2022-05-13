import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.Products;';
    const [result] = await this.connection.execute(query);
    return result as IProduct[];
  }

  public async create(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const newProduct: IProduct = { id: insertId, name, amount };
    console.log('model', newProduct);
    return newProduct;
  }
}
