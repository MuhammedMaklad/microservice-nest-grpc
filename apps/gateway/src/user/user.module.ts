import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppConfigService } from '../config/appConfig.service';
import { AppConfigModule } from '../config/appConfig.module';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: "USER_SERVICE",
        imports: [AppConfigModule],
        useFactory: async (config: AppConfigService) => ({
          transport: Transport.GRPC,
          options: {
            url: config.appConfig?.grpc_service!,
            package: config.appConfig?.grpc_package!,
            protoPath: join(__dirname, config.appConfig?.grpc_proto_path!)
          }
        }),
        inject: [AppConfigService]
      }
    ])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
