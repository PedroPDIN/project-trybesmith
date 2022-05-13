import { Request, Response } from 'express';
import ProductService from '../services/product.services';

export default class ProductController {
  constructor(private service = new ProductService()) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const products = await this.service.getAll();
    return res.status(200).json(products);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const product = req.body;
    const newProduct = await this.service.create(product);
    console.log('controller', newProduct);
    return res.status(201).json(newProduct);
  };
}
