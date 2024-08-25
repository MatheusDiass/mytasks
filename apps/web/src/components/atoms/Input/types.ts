export type Props = {
  placeholder: string;
  value: string | number;
  type: 'text' | 'password' | 'email';
  onChange?: () => void;
};
