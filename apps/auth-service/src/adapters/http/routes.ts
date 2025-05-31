import { Input } from '@/app/use-cases/create-account';
import { createAccountController } from './composition';
import { Route } from './http-server.types';

export const routes: Route[] = [
  {
    url: 'create-account',
    method: 'post',
    handler: async (req, res): Promise<void> => {
      try {
        await createAccountController.handle(req.body as Input);
      } catch (_err) {
        res.status(500).send({ error: _err });
      }
    },
  },
];
