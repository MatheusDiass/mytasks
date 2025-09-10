import React, { FC } from 'react';
import { Props } from './types';

export const Carousel: FC<Props> = (props) => {
  return (
    <div className="relative">
      <div className="relative flex overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab select-none touch-pan-x">
        <div className="flex gap-5">{props.children}</div>
      </div>
    </div>
  );
};
