import React from 'react';
import * as S from './styles';
import { Props } from './types';

export const Input: React.FC<Props> = ({
  placeholder,
  value,
  type,
  onChange,
}) => {
  return (
    <S.Input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
