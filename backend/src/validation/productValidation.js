import Joi from "joi";

export const productValidationSchema = Joi.object({
  category: Joi.string().required(),
  productName: Joi.string().required(),
  image: Joi.string(),
  price: Joi.number().min(0).required(),
  inStock: Joi.number().default(0),
  description: Joi.string().trim().allow("", null),
  imageName: Joi.string().required(),
});
