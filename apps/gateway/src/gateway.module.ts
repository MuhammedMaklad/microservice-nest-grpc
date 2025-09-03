import { Module, NestModule } from '@nestjs/common';
import { AppConfigModule } from './config/appConfig.module';
import { AppConfigService } from './config/appConfig.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [AppConfigModule, UserModule],
  controllers: [],
  providers: [AppConfigService],
})
export class GatewayModule { }


// export class GatewayModule implements NestModule {
//   constructor(private readonly configService: AppConfigService) { }
//   configure(consumer: MiddlewareConsumer) {
//     throw new Error('Method not implemented.');
//   }
// }

