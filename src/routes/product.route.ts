import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import * as validation from '../middlewares/validation/product.validation';

const routeProduct = Router();

const controller = new ProductController();
const { isRequiredProduct, isValidProduct } = validation.default;

routeProduct.get('/', controller.getAll);
routeProduct.post('/', isRequiredProduct, isValidProduct, controller.create);

export default routeProduct;
