import { Request, Response } from 'express';
import UserService from '../services/user.services';

export default class UserController {
  constructor(private service = new UserService()) {}

  public create = async (req: Request, res: Response): Promise<Response> => {
    const product = req.body;
    const result = await this.service.create(product, product.password);
    return res.status(201).json({ token: result });
  };

  public login = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;
    const login = await this.service.login({ username, password });
    
    if (!login.message) return res.status(login.key).json({ token: login.token });
    return res.status(login.key).json({ message: login.message });
  };
}