'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { SocialMediaOptions } from '@/components/SocialMediaOptions';
import UserSvg from '@/assets/icons/user.svg';
import EmailSvg from '@/assets/icons/email.svg';
import PasswordSvg from '@/assets/icons/password.svg';
import { RegisterData } from './types';
import { CreateAccountDocument } from '@/lib/graphql/generated/graphql';

export default function Register() {
  const router = useRouter();
  const [registerData, setRegisterData] = useState<RegisterData>({
    name: '',
    email: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [createAccount, { loading }] = useMutation(CreateAccountDocument);
  const handleRegister = async () => {
    if (registerData.password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      await createAccount({
        variables: {
          data: {
            name: registerData.name,
            email: registerData.email,
            password: registerData.password,
            dateBirth: '2000-01-01',
          },
        },
      });

      router.replace('/confirm-account');
    } catch (err) {
      console.error('Error creating account:', err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="w-[24rem] sm:w-[30rem] flex flex-col items-center justify-center p-10 border-brand-300 border-1 rounded-lg ">
        <p className="text-4xl">
          <strong className="text-brand">My</strong>
          <span className="text-brand-300">Tasks</span>
        </p>

        <br />

        <p className="mb-15 text-text-muted">
          <strong>Management App</strong>
        </p>
        <p className="mb-5">
          <strong>Create your account</strong>
        </p>

        <Input
          placeholder="Name"
          Icon={UserSvg}
          onChange={(text) =>
            setRegisterData((prev) => ({ ...prev, name: text }))
          }
        />

        <br />

        <Input
          placeholder="Email"
          Icon={EmailSvg}
          onChange={(text) =>
            setRegisterData((prev) => ({ ...prev, email: text }))
          }
        />

        <br />

        <Input
          placeholder="Password"
          isPassword
          Icon={PasswordSvg}
          onChange={(text) =>
            setRegisterData((prev) => ({ ...prev, password: text }))
          }
        />

        <br />

        <Input
          placeholder="Confirm Password"
          isPassword
          Icon={PasswordSvg}
          onChange={(text) => setConfirmPassword(text)}
        />

        <br />

        <Button text="Register" isLoading={loading} onClick={handleRegister} />

        <SocialMediaOptions label="Or Register with" />
      </div>
    </div>
  );
}
