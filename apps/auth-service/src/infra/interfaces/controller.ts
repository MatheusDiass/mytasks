export interface IController<I, O> {
  handle(request: I): Promise<O>;
}
