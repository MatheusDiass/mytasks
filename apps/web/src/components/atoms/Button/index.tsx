import { Props } from './types';
import * as S from './styles';

export const Button: React.FC<Props> = ({ text, onClick }) => {
  return <S.Button onClick={onClick}>{text}</S.Button>;
};
