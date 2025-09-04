import { FC, SVGProps } from 'react';

export type InputProps = {
  placeholder: string;
  isPassword?: boolean;
  Icon?: FC<SVGProps<SVGSVGElement>>;
  onChange: (text: string) => void;
};
