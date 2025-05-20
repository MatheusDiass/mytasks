import { Route } from './http-server.types';

export interface IHttpServer {
  setup(): Promise<void>;
  registerRoute(route: Route): void;
}
