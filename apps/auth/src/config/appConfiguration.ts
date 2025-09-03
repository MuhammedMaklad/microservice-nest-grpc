import { registerAs } from "@nestjs/config";

export const databaseConfig = registerAs("database", () => ({
  type: process.env.DB_TYPE || 'mongodb',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT ?? "27017", 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'mongodb',
}));

export const appConfig = registerAs('app', () => ({
  name: process.env.APP_NAME || 'Auth Microservice',
  version: process.env.APP_VERSION || '1.0.0',
  environment: process.env.NODE_ENV || 'development',
  grpc_port: process.env.GRPC_PORT || 50000,
  grpc_host: process.env.GRPC_HOST || "localhost",

  grpc_proto_path: process.env.GRPC_PROTOPATH || "../../../proto/auth.proto",
  grpc_package: process.env.GRPC_PACKAGE || "auth",
}));