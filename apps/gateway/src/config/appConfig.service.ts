import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AppConfig } from "./interfaces/AppConfig.interface";

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) { }
  // App Configuration
  get appConfig() {
    return this.configService.get<AppConfig>('app');
  }



}