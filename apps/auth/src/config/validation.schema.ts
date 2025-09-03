import * as Joi from "joi";

export const configValidationSchema = Joi.object({
  // App Configuration
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  APP_NAME: Joi.string().default('auth microservice'),
  GRPC_PORT: Joi.number().port().default(5000),
  GRPC_HOST: Joi.string().default('0.0.0.0'),
  GRPC_PACKAGE: Joi.string().required(),
  GRPC_PROTOPATH: Joi.string().required(),



  // Database Configuration
  DB_TYPE: Joi.string().valid('postgres', 'mysql', 'sqlite', 'mongodb').default('postgres'),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().port().default(27017),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().allow('').default(''),
  DB_NAME: Joi.string().required(),
});