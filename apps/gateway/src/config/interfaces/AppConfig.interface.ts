export interface AppConfig {
  name: string;
  version: string;
  port: number;
  host: string;
  environment: string;
  globalPrefix: string;
  corsOrigin: string[];
  grpc_service: string;
  grpc_package: string;
  grpc_proto_path: string;
}