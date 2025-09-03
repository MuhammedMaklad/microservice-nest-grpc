import * as Joi from "joi";

export const configValidationSchema = Joi.object({
  // App Configuration
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  PORT: Joi.number().port().default(3000),
  HOST: Joi.string().default('0.0.0.0'),
  APP_NAME: Joi.string().default('NestJS Application'),
  GLOBAL_PREFIX: Joi.string().default('api'),

});