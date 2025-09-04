export enum ButtonType {
  Disable = 'disable',
  Destructive = 'destructive',
}

export type ButtonProps = {
  text: string;
  type?: ButtonType;
  isLoading?: boolean;
  onClick?: () => void;
};
