import UserModel from '../models/user.model';
import connection from '../models/connection';
import generateToken from './generateToken';
import { IPayload, IUser } from '../interfaces/user.interface';
// import * as validation from '../middlewares/validation/login.validation';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUser, password: IPayload): Promise<string> {
    await this.model.create(user);
    return generateToken.generateToken(password);
  }

/*   public async login(dataLogin: IUser): Promise<(string | null)[]> {
    const user = await this.model.loginUser(dataLogin.username);
    const pass = await this.model.loginPassword(dataLogin.password);

    if(!user || !pass) return [user, pass];
    return 
     
  } */
}