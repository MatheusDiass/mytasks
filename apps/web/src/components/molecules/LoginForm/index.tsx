import { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { Input } from '../../Atoms/Input';
import { Icon } from '../../Atoms/Icon';
import { Button } from '../../Atoms/Button';
import { PasswordInput, Props } from './types';
import * as S from './styles';

export const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const [passwordInput, setPasswordInput] = useState<PasswordInput>({
    type: 'password',
    icon: FaEyeSlash,
  });

  const handleIconClick = () => {
    if (passwordInput.type === 'password') {
      setPasswordInput({ type: 'text', icon: IoEyeSharp });
      return;
    }

    if (passwordInput.type === 'text') {
      setPasswordInput({ type: 'password', icon: FaEyeSlash });
      return;
    }
  };

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Wrapper>
        <S.WrapperLeftIcon>
          <Icon icon={MdEmail} />
        </S.WrapperLeftIcon>
        <Input
          placeholder="Digite seu e-mail"
          hasLeftIcon={true}
          type="text"
          value=""
        />
      </S.Wrapper>

      <S.Wrapper>
        <S.WrapperLeftIcon>
          <Icon icon={RiLockPasswordFill} />
        </S.WrapperLeftIcon>

        <Input
          placeholder="Digite sua senha"
          hasLeftIcon={true}
          hasRightIcon={true}
          type={passwordInput.type}
          value=""
        />

        <S.WrapperRightIcon>
          <Icon icon={passwordInput.icon} onClick={handleIconClick} />
        </S.WrapperRightIcon>
      </S.Wrapper>

      <Button text="Acessar" />
    </S.Form>
  );
};
