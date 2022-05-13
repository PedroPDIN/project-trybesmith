import { Request, Response, NextFunction } from 'express';
import productSchema from '../joi/product.joi';

const isRequiredProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (!amount) return res.status(400).json({ message: '"amount" is required' });
  next();
};

const isValidProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = productSchema.validate(req.body);
  if (error) return res.status(422).json({ message: error.message });
  next();
};

export default {
  isRequiredProduct,
  isValidProduct,
};
