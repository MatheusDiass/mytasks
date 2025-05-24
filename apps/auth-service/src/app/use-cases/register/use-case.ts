import { IExecutable } from '@/app/interfaces';
import { Input } from './types';

export class RegisterUseCase implements IExecutable<Input, void> {
  async execute(input: Input): Promise<void> {}
}
