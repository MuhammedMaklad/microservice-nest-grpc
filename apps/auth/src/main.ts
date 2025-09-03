import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Logger } from '@nestjs/common';
import { AppConfigService } from './config/appConfig.service';

async function bootstrap() {

  const appContext = await NestFactory.createApplicationContext(AuthModule);
  const appConfigService = appContext.get(AppConfigService);
  const appConfig = appConfigService.getApp();

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AuthModule, {
    transport: Transport.GRPC,
    options: {
      package: appConfig?.grpc_package!,
      protoPath: join(__dirname, "../auth.proto"),
      url: "localhost:50000",
      loader: {
        keepCase: true, // Important for BloomRPC compatibility
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
      }
    }
  });

  await app.listen();
  Logger.log(`Auth microservice is running on: ${appConfig?.grpc_host}:${appConfig?.grpc_port}`);
}

bootstrap().catch((e) => {
  Logger.error(`Error while bootstrap auth micro service ${e}`)
});
