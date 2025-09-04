import { FC, useState } from 'react';
import { Props } from './types';

export const CodeConfirmation: FC<Props> = (props) => {
  const [code, setCode] = useState<string[]>(Array(6).fill(''));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);
    props.onChange?.(newCode.join(''));
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between gap-2 mb-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <input
            key={index}
            className="w-10 h-10 border-b-3 border-brand-300 focus:outline-none focus:border-brand text-center"
            type="text"
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>

      <p className="text-sm ">
        Don&apos;t receive a code? <span className="text-brand">Resend</span>
      </p>
    </div>
  );
};
