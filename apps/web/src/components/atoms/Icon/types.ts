import { IconBaseProps, IconType } from 'react-icons';

export interface Props extends IconBaseProps {
  icon: IconType;
  onClick?: () => void;
}
