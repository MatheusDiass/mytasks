import React from 'react';
import * as S from './styles';
import { Props } from './types';

export const Input: React.FC<Props> = ({
  placeholder,
  value,
  type,
  hasLeftIcon,
  hasRightIcon,
  onChange,
}) => {
  return (
    <S.Input
      placeholder={placeholder}
      type={type}
      value={value}
      $hasLeftIcon={hasLeftIcon}
      $hasRightIcon={hasRightIcon}
      onChange={onChange}
      autoComplete="off"
    />
  );
};
