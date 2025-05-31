export interface ICheckEmailExistsRepository {
  execute(email: string): Promise<boolean>;
}
