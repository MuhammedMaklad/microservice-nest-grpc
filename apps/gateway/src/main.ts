import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import { AppConfigService } from './config/appConfig.service';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);

  const logger = new Logger('Bootstrap');

  const appConfigService = app.get(AppConfigService);
  const appConfig = appConfigService.appConfig;

  // Global prefix
  app.setGlobalPrefix(appConfig?.globalPrefix!);

  // CORS
  app.enableCors({
    origin: appConfig?.corsOrigin,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  });

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      disableErrorMessages: appConfig?.environment == "production",
    }),
  );

  //  Swagger documentation (only in development)
  if (appConfig?.environment == 'development') {
    const config = new DocumentBuilder()
      .setTitle(appConfig.name)
      .setDescription(`${appConfig.name} API Documentation`)
      .setVersion(appConfig.version)
      .addBearerAuth()
      .addTag('Authentication')
      .addTag('Users')
      .addServer(`http://${appConfig.host}:${appConfig.port}`, 'Development')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(`${appConfig.globalPrefix}/docs`, app, document, {
      swaggerOptions: {
        persistAuthorization: true,
      },
    });

    logger.log(
      `Swagger documentation available at http://${appConfig.host}:${appConfig.port}/${appConfig.globalPrefix}/docs`,
    );

  }

  await app.listen(appConfig?.port ?? 3000);

  logger.log(
    `${appConfig?.name} v${appConfig?.version} is running on http://${appConfig?.host}:${appConfig?.port}/${appConfig?.globalPrefix}`,
  );

  logger.log(`Environment: ${appConfig?.environment}`);

}
bootstrap().catch((error) => {
  Logger.error(`Failed to start application ${error}`);
  // process.exit(1);
});