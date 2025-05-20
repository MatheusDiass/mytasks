import { Config } from './config.type';

export const apiConfig: Config = {
  port: Number(process.env.PORT) ?? 3000,
};
