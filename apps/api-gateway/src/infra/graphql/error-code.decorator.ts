import { createMethodMiddlewareDecorator } from 'type-graphql';
import { GraphQLContext } from './graphql.type';

export const ErrorCode = (code: string) => {
  return createMethodMiddlewareDecorator<GraphQLContext>(
    async ({ context }, next) => {
      context.errorCode = code;
      return next();
    }
  );
};
