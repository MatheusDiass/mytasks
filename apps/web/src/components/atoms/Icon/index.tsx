import React from 'react';
import * as S from './styles';
import { Props } from './types';

export const Icon: React.FC<Props> = ({ icon, onClick }) => {
  return <S.Icon as={icon} onClick={onClick} />;
};
