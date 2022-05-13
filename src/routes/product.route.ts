import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const routeProduct = Router();

const controller = new ProductController();

routeProduct.get('/', controller.getAll);

export default routeProduct;
