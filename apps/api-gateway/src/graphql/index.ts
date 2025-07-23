import { AuthResolver } from './auth/auth.resolver';
import { HealthResolver } from './health.resolver';

export const resolvers = [HealthResolver, AuthResolver];
