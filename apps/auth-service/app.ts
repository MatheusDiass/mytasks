import 'module-alias/register';

import { HttpServer } from '@/adapters/http';
import { routes } from '@/adapters/http/routes';

(async (): Promise<void> => {
  const httpServer = new HttpServer();
  routes.forEach((route) => {
    httpServer.registerRoute(route);
  });

  await httpServer.setup();
})().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Error starting server:', err);
  process.exit(1);
});
