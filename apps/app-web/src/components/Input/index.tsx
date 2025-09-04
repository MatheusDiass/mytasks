'use client';
import { FC, useState } from 'react';
import { InputProps } from './types';
import EyeOpen from '@/assets/icons/eye-open.svg';
import EyeClosed from '@/assets/icons/eye-close.svg';

export const Input: FC<InputProps> = ({
  Icon,
  placeholder,
  isPassword,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const type = isPassword && !showPassword ? 'password' : 'text';
  const paddingClass = isPassword ? 'p-[1.12rem]' : '';

  return (
    <div className="flex items-center w-full">
      {Icon && (
        <div className="bg-brand p-[1.06rem] rounded-l-lg">
          <Icon />
        </div>
      )}

      <div className="relative w-full">
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full ${paddingClass} border-1 border-brand-300 rounded-r-lg pl-4 pr-10 h-12 focus:outline-none focus:border-brand focus:ring-brand`}
          onChange={(e) => onChange(e.target.value)}
        />

        {isPassword && (
          <div
            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <EyeOpen className="w-5 h-5" />
            ) : (
              <EyeClosed className="w-5 h-5" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
