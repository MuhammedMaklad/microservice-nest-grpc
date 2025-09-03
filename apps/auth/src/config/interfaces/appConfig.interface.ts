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
  environment: string;
  grpc_port: number;
  grpc_host: string;
  grpc_proto_path: string;
  grpc_package: string;
}