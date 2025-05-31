import { FastifyReply, FastifyRequest } from 'fastify';

export type Route = {
  url: string;
  method: 'post' | 'get' | 'put' | 'delete';
  handler: (req: FastifyRequest, res: FastifyReply) => Promise<void>;
};
