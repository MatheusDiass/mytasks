export interface ICheckEmailExistsRepo {
  execute(email: string): Promise<boolean>;
}
