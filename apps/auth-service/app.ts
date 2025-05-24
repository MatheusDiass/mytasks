import 'module-alias/register';

import { HttpServer } from '@/adapters/http';

(async (): Promise<void> => {
  const httpServer = new HttpServer();
  await httpServer.setup();
})().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Erro ao iniciar o servidor:', err);
  process.exit(1);
});
