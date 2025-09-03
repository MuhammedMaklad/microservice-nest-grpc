import { registerAs } from "@nestjs/config";


export const appConfig = registerAs('app', () => ({
  name: process.env.APP_NAME || 'NestJS Application',
  version: process.env.APP_VERSION || '1.0.0',
  port: parseInt(process.env.PORT ?? "3000", 10),
  host: process.env.HOST || '0.0.0.0',
  environment: process.env.NODE_ENV || 'development',
  globalPrefix: process.env.GLOBAL_PREFIX || 'api',
  corsOrigin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000'],
  grpc_service: process.env.GRPC_USER_SERVICE_URL,
  grpc_package: process.env.GRPC_USER_PACKAGE,
  grpc_proto_path: process.env.GRPC_USER_PROTO_PATH
}));