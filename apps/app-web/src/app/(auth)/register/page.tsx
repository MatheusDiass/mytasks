'use client';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { SocialMediaOptions } from '@/components/SocialMediaOptions';
import UserSvg from '@/assets/icons/user.svg';
import EmailSvg from '@/assets/icons/email.svg';
import PasswordSvg from '@/assets/icons/password.svg';

export default function Register() {
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
        <p className="mb-5">Create your account</p>

        <Input placeholder="Username" Icon={UserSvg} />

        <br />

        <Input placeholder="Email" Icon={EmailSvg} />

        <br />

        <Input placeholder="Password" isPassword Icon={PasswordSvg} />

        <br />

        <Input placeholder="Confirm Password" isPassword Icon={PasswordSvg} />

        <br />

        <Button text="Register" />

        <SocialMediaOptions label="Or Register with" />
      </div>
    </div>
  );
}
