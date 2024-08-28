import React from 'react';
import * as S from './styles';
import PageTitle from '../../components/atoms/PageTitle';
import { LoginForm } from '../../components/molecules/LoginForm';

const Login: React.FC = () => {
  return (
    <S.Container>
      <PageTitle text="Login" />
      <LoginForm onSubmit={() => {}} />
    </S.Container>
  );
};

export default Login;
