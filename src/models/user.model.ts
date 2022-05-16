import { Pool } from 'mysql2/promise';
import { IUser } from '../interfaces/user.interface';

type Login = {
  id: number,
  username: string,
};

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<void> {
    const { username, classe, level, password } = user;
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES (?, ?, ?, ?);`;
    await this.connection.execute(query, [username, classe, level, password]);
  }

  public async login(username: string, password: string): Promise<Login | null > {
    const queryUserName = `
    SELECT 
    id, username
    FROM Trybesmith.Users
    WHERE username = ? and password = ?;
    `;

    const [row] = await this.connection.execute(queryUserName, [username, password]);
    const [user] = row as Login[];

    if (!row) return null;
    return user;
  }
}
