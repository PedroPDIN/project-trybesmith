import { Router } from 'express';
import UserController from '../controllers/user.controller';
import * as validation from '../middlewares/validation/user.validation';

const routeUser = Router();

const controller = new UserController();
const { isRequiredUser, isValidLevel, isValidUser } = validation.default;

routeUser.post('/', isRequiredUser, isValidLevel, isValidUser, controller.create);

export default routeUser;