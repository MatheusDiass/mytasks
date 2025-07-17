import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';

export const errorHandlingMiddleware = (
  error: FastifyError,
  _: FastifyRequest,
  res: FastifyReply
): void => {
  const statusCode = error.statusCode || 500;

  res.status(statusCode).send({
    error: {
      statusCode,
      message: error.message || 'An unexpected error occurred!',
    },
  });
};
