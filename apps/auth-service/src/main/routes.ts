import { Input } from '@/app/use-cases/create-account';
import { Route } from '../infra/http/http-server.types';
import { ConfirmAccountFactory, CreateAccountFactory } from './factories';
import {
  ConfirmAccountInput,
  ConfirmAccountResponse,
} from '@/app/use-cases/confirm-account';

export const routes: Route[] = [
  {
    url: 'accounts',
    method: 'post',
    handler: async (req, _): Promise<string> => {
      return await (
        await CreateAccountFactory.create()
      ).handle(req.body as Input);
    },
  },
  {
    url: 'confirm-account',
    method: 'post',
    handler: async (req, _): Promise<ConfirmAccountResponse> => {
      return await ConfirmAccountFactory.create().handle(
        req.body as ConfirmAccountInput
      );
    },
  },
];
