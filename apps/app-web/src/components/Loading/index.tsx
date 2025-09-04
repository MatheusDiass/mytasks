'use client';
import { FC } from 'react';
import LoadingSvg from '@/assets/icons/loading.svg';
import { LoadingSize, Props } from './types';

export const Loading: FC<Props> = (props) => {
  const size = props.size ?? LoadingSize.Small;
  return <LoadingSvg className="animate-spin" width={size} height={size} />;
};
