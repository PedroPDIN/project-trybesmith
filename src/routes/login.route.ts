import { Router } from 'express';
import UserController from '../controllers/user.controller';
import isValidLogin from '../middlewares/validation/login.validation';

const routeLogin = Router();

const controller = new UserController();

routeLogin.post('/', isValidLogin, controller.login);

export default routeLogin;