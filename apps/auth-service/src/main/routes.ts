import { Input } from '@/app/use-cases/create-account';
import { Route } from '../infra/http/http-server.types';
import { CreateAccountFactory } from './factories';

export const routes: Route[] = [
  {
    url: 'create-account',
    method: 'post',
    handler: async (req, _): Promise<void> => {
      await (await CreateAccountFactory.create()).handle(req.body as Input);
    },
  },
];
