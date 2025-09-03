import { Module, NestModule } from '@nestjs/common';
import { AppConfigModule } from './config/appConfig.module';
import { AppConfigService } from './config/appConfig.service';

@Module({
  imports: [AppConfigModule],
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

