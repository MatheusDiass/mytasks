'use client';
import { FC } from 'react';
import { Props } from './types';
import { ProgressBar } from '../ProgressBar';

export const PriorityTaskCard: FC<Props> = (props) => {
  return (
    <div className="relative h-60 w-40 overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-[url('/assets/card-background-blue.svg')] bg-center bg-cover bg-no-repeat pointer-events-none">
        <div className="z-10 h-full flex flex-col justify-between items-center py-3 px-3">
          <div className="bg-brand-white py-0.5 px-2 rounded-3xl self-end">
            <div>{props.workingDays} days</div>
          </div>
          <div className="text-brand-white text-xl">
            <strong>{props.title}</strong>
          </div>

          <div className="flex flex-col w-full">
            <div className="text-brand-white self-start">Progress</div>
            <ProgressBar value={props.progress} />
            <div className="text-brand-white self-end">{props.progress}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
