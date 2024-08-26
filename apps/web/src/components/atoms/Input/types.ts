export type InputType = 'text' | 'password' | 'email';

export type Props = {
  placeholder: string;
  value: string | number;
  type: InputType;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  onChange?: () => void;
};

export type StyleProps = {
  $hasLeftIcon?: boolean;
  $hasRightIcon?: boolean;
};
