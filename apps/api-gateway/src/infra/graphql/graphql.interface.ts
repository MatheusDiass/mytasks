export interface IGraphQLServer {
  start(resolvers: unknown[]): Promise<void>;
}
