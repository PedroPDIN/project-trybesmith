import { Request, Response } from 'express';
import ProductService from '../services/product.services';

export default class ProductController {
  constructor(private service = new ProductService()) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const products = await this.service.getAll();
    return res.status(200).json(products);
  };
}
