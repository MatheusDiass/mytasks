import { buildSchema, ClassType, NonEmptyArray } from 'type-graphql';
import { IGraphQLServer } from './graphql.interface';
import { ApolloServer } from 'apollo-server';
import { apiGatewayConfig } from '../../config/config';
import { ErrorMiddleware } from './error.middleware';

export class GraphqlServer implements IGraphQLServer {
  async start(resolvers: unknown[]): Promise<void> {
    const schema = await buildSchema({
      resolvers: resolvers as NonEmptyArray<ClassType>,
      globalMiddlewares: [ErrorMiddleware],
    });

    const server = new ApolloServer({
      schema,
    });

    const { url } = await server.listen({ port: apiGatewayConfig.port });
    console.log(`🚀 API Gateway is running at ${url}`);
  }
}
