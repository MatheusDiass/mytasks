export interface IQueue {
  publish<T>(queue: string, data: T): Promise<void>;
}
