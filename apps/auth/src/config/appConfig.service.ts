import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AppConfig, DatabaseConfig } from "./interfaces/appConfig.interface";




@Injectable()
export class AppConfigService {

  constructor(private readonly configService: ConfigService) { }

  getApp() {
    return this.configService.get<AppConfig>("app");
  }
  getDatabase() {
    return this.configService.get<DatabaseConfig>("database");
  }
}