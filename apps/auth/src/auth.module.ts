import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/appConfig.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AppConfigModule, UserModule],
  controllers: [],
  providers: [],
})
export class AuthModule { }
