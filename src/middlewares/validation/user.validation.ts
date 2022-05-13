import { Request, Response, NextFunction } from 'express';
import userSchema from '../joi/user.joi';

const isRequiredUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, classe, password } = req.body;
  if (!username) return res.status(400).json({ message: '"username" is required' });
  if (!classe) return res.status(400).json({ message: '"classe" is required' });
  if (!password) return res.status(400).json({ message: '"password" is required' });
  next();
};

const isValidLevel = async (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  const LIMIT = 0;
  if (level <= LIMIT) {
    return res
      .status(422)
      .json({ message: '"level" must be greater than or equal to 1' });
  }
  if (!level) return res.status(400).json({ message: '"level" is required' });
  next();
};

const isValidUser = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(422).json({ message: error.message });
  next();
};

export default {
  isRequiredUser,
  isValidLevel,
  isValidUser,
};