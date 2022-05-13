import UserModel from '../models/user.model';
import connection from '../models/connection';
import generateToken from './generateToken';
import { IPayload, IUser } from '../interfaces/user.interface';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUser, password: IPayload): Promise<string> {
    await this.model.create(user);
    return generateToken.generateToken(password);
  }
}