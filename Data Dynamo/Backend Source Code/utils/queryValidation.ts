import Joi from "joi";


export const queryValidation = (data: string): Joi.ValidationResult =>
  Joi.object({
    query: Joi.string().required(),
    page: Joi.number().required(),
    pageSize: Joi.number().required()
  }).validate(data);

