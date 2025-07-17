import { IQueue, PublishInput } from '@/domain/interfaces';

export class Queue implements IQueue {
  async publish<T>(input: PublishInput<T>): Promise<void> {}
}
