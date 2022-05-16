import UserModel from '../models/user.model';
import connection from '../models/connection';
import generateToken from './generateToken';
import { IPayload, IUser } from '../interfaces/user.interface';

type LoginService = {
  key: number,
  message?: string,
  token?: string,
};

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUser, password: IPayload): Promise<string> {
    await this.model.create(user);
    return generateToken.generateToken(password);
  }

  public async login(dataLogin: IUser): Promise<(LoginService)> {
    const { username, password } = dataLogin;
    const login = await this.model.login(username, password);

    if (!login) return { key: 401, message: 'Username or password invalid' };

    const resultToken = generateToken.generateTokenLogin(login);
    return { key: 200, token: resultToken };
  }
}