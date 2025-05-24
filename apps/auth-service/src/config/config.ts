import { Config } from './config.type';

export const apiConfig: Config = {
  port: Number(process.env.PORT) ?? 3000,
  queueConn: process.env.QUEUE_CONN as string,
};
