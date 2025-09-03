import { Global, Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule, ConfigService } from "@nestjs/config"
import { appConfig, databaseConfig } from "./appConfiguration";
import { configValidationSchema } from "./validation.schema";
import { AppConfigService } from "./appConfig.service";

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
        'apps/auth/.env'
      ],
      load: [
        appConfig,
        databaseConfig
      ],
      validationSchema: configValidationSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: false
      }
    })
  ],
  providers: [ConfigService, AppConfigService],
  exports: [AppConfigService]
})

export class AppConfigModule { }