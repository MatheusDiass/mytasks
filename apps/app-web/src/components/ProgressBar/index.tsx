'use client';
import { FC } from 'react';
import { Props } from './types';

export const ProgressBar: FC<Props> = (props) => {
  const percentage = Math.max(0, Math.min(100, props.value));

  return (
    <div className="bg-brand-600 rounded-3xl h-1 w-full">
      <div
        className="bg-brand-white rounded-3xl h-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};
