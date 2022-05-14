import { Pool } from 'mysql2/promise';
import { IUser } from '../interfaces/user.interface';

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

/*   public async loginUser(username: string): Promise<string | null > {
    const queryUserName = `
    SELECT 
    CASE 
    WHEN EXISTS(SELECT username FROM Trybesmith.Users WHERE username = ?)
    THEN 'exist'
    END as username;
    `;

    const [row] = await this.connection.execute(queryUserName, [username]);
    const [user] = row as User[];

    if (!row) return null;
    return user.username;
  }

  public async loginPassword(password: Password): Promise<string | null > {
    const queryPassword = `
    SELECT 
    CASE 
    WHEN EXISTS(SELECT username FROM Trybesmith.Users WHERE password = ?)
    THEN 'exist'
    END as password;
    `;

    const [row] = await this.connection.execute(queryPassword, [password]);
    const [pass] = row as Password[];

    if (!row) return null;
    return pass.password;
  } */
}
