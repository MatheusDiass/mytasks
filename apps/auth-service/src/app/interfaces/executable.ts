export interface IExecutable<I, O> {
  execute(input: I): Promise<O>;
}
