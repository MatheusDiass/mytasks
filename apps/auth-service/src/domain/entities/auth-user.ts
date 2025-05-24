import {
  InvalidDateBirthError,
  InvalidEmailError,
  InvalidNameError,
} from '../errors';
import { Props } from './auth-user.types';

export class AuthUser {
  private _name: string;
  private _dateBirth: Date;
  private _email: string;
  private _password: string;

  constructor(props: Props) {
    this.validateName(props.name);
    this.validateDateBirth(props.dateBirth);
    this.validateEmail(props.email);

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

  private validateDateBirth(dateBirth: Date): void {
    if (!(dateBirth instanceof Date) || isNaN(dateBirth.getTime())) {
      throw new InvalidDateBirthError();
    }
  }

  private validateEmail(email: string): void {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !regex.test(email)) {
      throw new InvalidEmailError();
    }
  }

  get name(): string {
    return this._name;
  }

  get dateBirth(): Date {
    return this._dateBirth;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }
}
