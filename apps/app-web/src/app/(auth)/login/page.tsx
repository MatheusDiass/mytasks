'use client';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { SocialMediaOptions } from '@/components/SocialMediaOptions';
import EmailSvg from '@/assets/icons/email.svg';
import PasswordSvg from '@/assets/icons/password.svg';
import Link from 'next/link';

export default function Login() {
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
        <p className="mb-5">Login to your account</p>

        <Input placeholder="Email" Icon={EmailSvg} />

        <br />

        <Input placeholder="Password" isPassword Icon={PasswordSvg} />
        <div className="w-full">
          <Link href="/login" className="text-brand-300 text-xs float-right">
            Forgot Password?
          </Link>
        </div>

        <br />

        <Button text="Login" />

        <SocialMediaOptions />

        <div className="mt-5">
          <span>Dont have an account?</span>
          <Link href="/login" className="text-brand ml-1">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
