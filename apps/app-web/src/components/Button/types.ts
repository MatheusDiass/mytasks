export enum ButtonType {
  Disable = 'disable',
  Destructive = 'destructive',
}

export type Props = {
  text: string;
  type?: ButtonType;
  isLoading?: boolean;
  onClick?: () => void;
};
