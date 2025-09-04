import { FastifyReply, FastifyRequest } from 'fastify';

export type GraphQLContext = {
  errorCode: string;
  req: FastifyRequest;
  res: FastifyReply;
};
