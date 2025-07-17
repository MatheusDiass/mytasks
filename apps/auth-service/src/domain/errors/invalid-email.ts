export class InvalidEmailError extends Error {
  constructor() {
    super('The email is invalid!');
    this.name = 'InvalidEmailError';
  }
}
