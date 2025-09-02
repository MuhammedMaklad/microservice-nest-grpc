export interface DatabaseConfig {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export interface AppConfig {
  name: string;
  version: string;
  port: number;
  host: string;
  environment: string;
  globalPrefix: string;
  corsOrigin: string[];
}