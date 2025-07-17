import { ICheckEmailExistsRepo } from '@/domain/interfaces';

export class CheckEmailExistsRepo implements ICheckEmailExistsRepo {
  async execute(email: string): Promise<boolean> {
    if (email === 'matheus.dias@email.com') {
      return true;
    } else {
      return false;
    }
  }
}
