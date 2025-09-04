import { buildSchema, ClassType, NonEmptyArray } from 'type-graphql';
import { ApolloServer } from '@apollo/server';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import {
  fastifyApolloDrainPlugin,
  fastifyApolloHandler,
} from '@as-integrations/fastify';
import { IGraphQLServer } from './graphql.interface';
import { apiGatewayConfig } from '../../config/config';
import { ErrorMiddleware } from './error.middleware';

export class GraphqlServer implements IGraphQLServer {
  async start(resolvers: unknown[]): Promise<void> {
    const app = Fastify({ logger: true });

    const schema = await buildSchema({
      resolvers: resolvers as NonEmptyArray<ClassType>,
      globalMiddlewares: [ErrorMiddleware],
    });

    const server = new ApolloServer({
      schema,
      // Required for proper shutdown: no new requests, finish pending ones, then call app.close().
      plugins: [fastifyApolloDrainPlugin(app)],
    });

    await server.start();

    await app.register(cors, {
      origin: 'http://localhost:3000',
      credentials: true,
      methods: ['GET', 'POST', 'OPTIONS'],
      allowedHeaders: ['content-type', 'authorization'],
      maxAge: 86400,
    });

    app.post(
      '/graphql',
      fastifyApolloHandler(server, {
        context: async (request, reply) => ({ req: request, res: reply }),
      })
    );

    const address = await app.listen({ port: apiGatewayConfig.port });

    console.log(`🚀 API Gateway is running at ${address}/graphql`);
  }
}
