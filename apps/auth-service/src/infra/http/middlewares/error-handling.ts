import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';

export const errorHandlingMiddleware = (
  error: FastifyError,
  _: FastifyRequest,
  res: FastifyReply
): void => {
  const statusCode = error.statusCode || 404;

  res.status(statusCode).send({
    error: {
      message: error.message || 'An unexpected error occurred!',
    },
  });
};
