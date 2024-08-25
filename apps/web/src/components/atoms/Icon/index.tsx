import React from 'react';
import * as S from './styles';
import { Props } from './types';

export const Icon: React.FC<Props> = ({ icon, color, size, onClick }) => {
  return <S.Icon as={icon} color={color} size={size} onClick={onClick} />;
};
