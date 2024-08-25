import { IconType } from 'react-icons';
import { InputType } from '../../Atoms/Input/types';

export type Props = {
  onSubmit: () => void;
};

export type PasswordInput = {
  type: InputType;
  icon: IconType;
};
