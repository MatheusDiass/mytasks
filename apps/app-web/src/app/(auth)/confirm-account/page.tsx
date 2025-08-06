'use client';
import MailDeliverySvg from '@/assets/images/mail-delivery.svg';
import { Button } from '@/components/Button';
import { CodeConfirmation } from '@/components/CodeConfirmation';

export default function ConfirmAccount() {
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
          <strong>Verify Account</strong>
        </p>

        <MailDeliverySvg className="mb-5" />

        <p className="mb-5 text-center sm:px-15 px-2">
          <strong>
            Please enter the verification number we send to your email
          </strong>
        </p>

        <div className="mb-10">
          <CodeConfirmation />
        </div>

        <Button text="Confirm" />
      </div>
    </div>
  );
}
