export interface IToken {
  generate(data: object): string;
  verify(token: string): boolean;
}
