import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const routeOrder = Router();

const controller = new OrderController();

routeOrder.get('/', controller.getAll);

export default routeOrder;