import { Query } from 'type-graphql';

export class HealthResolver {
  @Query(() => String)
  async healthCheck(): Promise<string> {
    return 'API Gateway is healthy';
  }
}
