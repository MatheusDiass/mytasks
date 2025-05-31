import {
  InvalidDateBirthError,
  InvalidEmailError,
  InvalidNameError,
  InvalidPasswordError,
} from '../errors';
import { Props } from './auth-user.types';

export class AuthUser {
  private _id?: string;
  private _name: string;
  private _dateBirth: string;
  private _email: string;
  private _password: string;
  private _createdAt?: Date;
  private _updatedAt?: Date;

  constructor(props: Props) {
    this.validateName(props.name);
    this.validateDateBirth(props.dateBirth);
    this.validateEmail(props.email);
    this.validatePassword(props.password);

    this._name = props.name;
    this._dateBirth = props.dateBirth;
    this._email = props.email;
    this._password = props.password;
  }

  private validateName(name: string): void {
    if (!name || name.trim().length < 2) {
      throw new InvalidNameError();
    }
  }

  private validateDateBirth(dateBirth: string): void {
    const parsedDate = new Date(dateBirth);

    if (isNaN(parsedDate.getTime())) {
      throw new InvalidDateBirthError();
    }
  }

  private validateEmail(email: string): void {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const hasDoubleDots = email.includes('..');
    const hasInvalidHyphenUsage =
      /@-/.test(email) || /-\./.test(email) || /\.–/.test(email);
    const hasSpace = email.includes(' ');

    if (
      !regex.test(email) ||
      hasDoubleDots ||
      hasInvalidHyphenUsage ||
      hasSpace
    ) {
      throw new InvalidEmailError();
    }
  }

  private validatePassword(password: string): void {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!regex.test(password)) {
      throw new InvalidPasswordError();
    }
  }

  get id(): string | undefined {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get dateBirth(): string {
    return this._dateBirth;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get createdAt(): Date | undefined {
    return this._createdAt;
  }

  get updatedAt(): Date | undefined {
    return this._updatedAt;
  }
}
