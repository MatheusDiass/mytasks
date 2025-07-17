export class InvalidNameError extends Error {
  constructor() {
    super('The name is invalid!');
    this.name = 'InvalidNameError';
  }
}
