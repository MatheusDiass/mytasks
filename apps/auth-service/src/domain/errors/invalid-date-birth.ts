export class InvalidDateBirthError extends Error {
  constructor() {
    super('The date birth is invalid!');
    this.name = 'InvalidDateBirthError';
  }
}
