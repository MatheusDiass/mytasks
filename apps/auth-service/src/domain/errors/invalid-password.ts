export class InvalidPasswordError extends Error {
  constructor() {
    super(
      'The password must be at least 8 characters long and include uppercase, lowercase, and special characters!'
    );
    this.name = 'InvalidPasswordError';
  }
}
