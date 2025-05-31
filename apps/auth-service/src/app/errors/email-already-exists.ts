export class EmailAlreadyExistsError extends Error {
  constructor() {
    super('The email already exists!');
    this.name = 'EmailAlreadyExistsError';
  }
}
