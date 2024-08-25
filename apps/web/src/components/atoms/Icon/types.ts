import { IconBaseProps, IconType } from 'react-icons';

export type Sizes = 'sm' | 'md' | 'lg' | 'xl';

export interface Props extends IconBaseProps {
  icon: IconType;
  color?: string;
  size?: Sizes;
  onClick?: () => void;
}
