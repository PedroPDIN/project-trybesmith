import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().min(3),
  classe: Joi.string().min(3),
  level: Joi.number(),
  password: Joi.string().min(8),
});

export default userSchema;