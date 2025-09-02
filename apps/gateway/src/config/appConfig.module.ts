import { Global, Module } from "@nestjs/common";
import { AppConfigService } from "./appConfig.service";
import { ConfigModule as NestConfigModule, ConfigService } from "@nestjs/config";
import { appConfig, databaseConfig } from "./appConfiguration";
import { configValidationSchema } from "./validation.schema";


@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      envFilePath: [
        `.env.${process.env.NODE_ENV}.local`,
        `.env.${process.env.NODE_ENV}`,
        '.env.local',
        '.env',
        'apps/gateway/.env'
      ],
      load: [
        appConfig,
        databaseConfig
      ],
      validationSchema: configValidationSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: false,
      }
    })
  ],
  providers: [ConfigService, AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule { }