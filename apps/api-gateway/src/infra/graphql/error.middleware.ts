import { GraphQLError } from 'graphql';
import axios from 'axios';
import { MiddlewareFn } from 'type-graphql';
import { GraphQLContext } from './graphql.type';

export const ErrorMiddleware: MiddlewareFn<GraphQLContext> = async (
  { context },
  next
) => {
  try {
    return await next();
  } catch (error) {
    const message = axios.isAxiosError(error)
      ? error.response?.data?.error?.message
      : 'An unexpected error occurred!';

    const code = context.errorCode || 'INTERNAL_ERROR';

    throw new GraphQLError(message, {
      extensions: { code },
    });
  }
};
