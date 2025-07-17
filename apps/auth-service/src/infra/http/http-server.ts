import Fastify, { FastifyInstance } from 'fastify';
import { IHttpServer } from './http-server.interface';
import { apiConfig } from '@/config/config';
import { Route } from './http-server.types';
import { errorHandlingMiddleware } from './middlewares';

export class HttpServer implements IHttpServer {
  private server: FastifyInstance;

  constructor() {
    this.server = Fastify({
      logger: true,
    });
  }

  async setup(): Promise<void> {
    this.server.get('/', async () => ({
      message: '🚀 Auth service is running!',
    }));

    this.server.setErrorHandler(errorHandlingMiddleware);

    try {
      await this.server.listen({
        port: apiConfig.port,
      });
    } catch (err) {
      this.server.log.error(err);
      process.exit(1);
    }
  }

  registerRoute(route: Route): void {
    this.server.route({
      method: route.method,
      url: `/api/v1/${route.url}`,
      handler: route.handler,
    });
  }
}
