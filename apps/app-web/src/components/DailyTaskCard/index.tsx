import { FC } from 'react';
import { Props } from './types';

export const DailyTaskCard: FC<Props> = (props) => {
  return (
    <div className="bg-brand-white border border-brand-200 rounded-xl px-3 py-3">
      <p>{props.title}</p>
    </div>
  );
};
