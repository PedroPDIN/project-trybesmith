import jwt from 'jsonwebtoken';
import { IPayload } from '../interfaces/user.interface';

type IPayloadLogin = {
  id: number,
  username: string,
};

const JWT_SECRET = 'ninguemsabe@@;)';

const generateToken = (data: IPayload) => {
  const payload = {
    user: data,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '10d' });
  
  return token;
};

const generateTokenLogin = (data: IPayloadLogin) => {
  const { id, username } = data;
  const payload = {
    id,
    username,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '10d' });
  
  return token;
};

export default {
  generateToken,
  generateTokenLogin,
};