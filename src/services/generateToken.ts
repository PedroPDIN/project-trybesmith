import jwt from 'jsonwebtoken';
import { IPayload } from '../interfaces/user.interface';

const JWT_SECRET = 'ninguemsabe@@;)';

const generateToken = (data: IPayload) => {
  const payload = {
    user: data,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '10d' });
  
  return token;
};

export default {
  generateToken,
};