import React from 'react';
import * as S from './styles';
import { Props } from './types';

const PageTitle: React.FC<Props> = ({ text }) => {
  return <S.PageTitle>{text}</S.PageTitle>;
};

export default PageTitle;
