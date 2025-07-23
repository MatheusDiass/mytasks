import { Config } from './config.type';

export const apiGatewayConfig: Config = {
  port: Number(process.env.PORT) ?? 3000,
  serviceURLs: {
    auth: <string>process.env.AUTH_SERVICE_URL,
    task: <string>process.env.TASKS_SERVICE_URL,
    user: <string>process.env.USERS_SERVICE_URL,
  },
};
