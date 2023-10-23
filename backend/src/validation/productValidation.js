import Joi from "joi";

export const productValidationSchema = Joi.object({
  category: Joi.string().required(),
  brand: Joi.string().required().trim(),
  image: Joi.string().required(),
  price: Joi.number().min(0).required(),
  inStock: Joi.number().default(0),
  description: Joi.string().trim().allow("", null),
});
