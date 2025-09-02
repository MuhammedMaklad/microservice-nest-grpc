import { registerAs } from "@nestjs/config";

export const databaseConfig = registerAs("database", () => ({
  type: process.env.DB_TYPE || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT ?? "5432", 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'nestjs_app',
}));

export const appConfig = registerAs('app', () => ({
  name: process.env.APP_NAME || 'NestJS Application',
  version: process.env.APP_VERSION || '1.0.0',
  port: parseInt(process.env.PORT ?? "3000", 10),
  host: process.env.HOST || '0.0.0.0',
  environment: process.env.NODE_ENV || 'development',
  globalPrefix: process.env.GLOBAL_PREFIX || 'api',
  corsOrigin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000'],
}));