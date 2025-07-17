import 'module-alias/register';

import { HttpServer } from '@/infra/http';
import { routes } from '@/main/routes';
import { Queue } from '@/infra/queue';
import { apiConfig } from '@/config/config';

(async (): Promise<void> => {
  // Http Server
  const httpServer = new HttpServer();
  routes.forEach((route) => {
    httpServer.registerRoute(route);
  });

  await httpServer.setup();

  // Queue
  const queue = await Queue.connect(apiConfig.queueConn);
  await queue.assertExchange('user.exchange');
  await queue.assertExchange('notification.exchange');
})().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Error starting server:', err);
  process.exit(1);
});
