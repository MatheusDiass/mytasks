export type PublishInput<T> = {
  exchangeName: string;
  routingKey: string;
  data: T;
};

export interface IQueue {
  publish<T>(input: PublishInput<T>): Promise<void>;
}
