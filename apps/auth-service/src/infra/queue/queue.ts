import amqp, { Channel } from 'amqplib';
import { IQueue, PublishInput } from '@/domain/interfaces';

export class Queue implements IQueue {
  private static readonly EXCHANGE_TYPE: string = 'direct';

  private constructor(private readonly _channel: Channel) {}

  static async connect(queueUrl: string): Promise<Queue> {
    const connection = await amqp.connect(queueUrl);
    const channel = await connection.createChannel();
    return new Queue(channel);
  }

  async publish<T>(input: PublishInput<T>): Promise<void> {
    const message = Buffer.from(JSON.stringify(input.data));
    this._channel.publish(input.exchangeName, input.routingKey, message, {
      persistent: true,
    });
  }

  async assertExchange(exchangeName: string): Promise<void> {
    await this._channel.assertExchange(exchangeName, Queue.EXCHANGE_TYPE, {
      durable: true,
    });
  }
}
