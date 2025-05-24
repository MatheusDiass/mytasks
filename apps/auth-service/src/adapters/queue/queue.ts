import amqp, { Channel } from 'amqplib';
import { IQueue } from '@/domain/interfaces';

export class Queue implements IQueue {
  private static readonly EXCHANGE_NAME: string = 'auth.events';
  private static readonly EXCHANGE_TYPE: string = 'fanout';

  constructor(private readonly channel: Channel) {}

  static async connect(): Promise<Queue> {
    const connection = await amqp.connect('');
    const channel = await connection.createChannel();
    await channel.assertExchange(this.EXCHANGE_NAME, this.EXCHANGE_TYPE);
    return new Queue(channel);
  }

  async publish<T>(data: T): Promise<void> {
    const message = Buffer.from(JSON.stringify(data));
    this.channel.publish(Queue.EXCHANGE_NAME, '', message, {
      persistent: true,
    });
  }
}
