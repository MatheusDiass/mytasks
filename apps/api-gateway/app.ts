import 'module-alias/register';
import 'reflect-metadata';

import { GraphqlServer } from '@/infra/graphql/graphql.adapter';
import { resolvers } from '@/graphql';

(async (): Promise<void> => {
  const graphqlServer = new GraphqlServer();
  await graphqlServer.start(resolvers);
})().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Error starting API Gateway:', err);
  process.exit(1);
});
