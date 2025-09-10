'use client';
import { FC } from 'react';
import { Props, ButtonType } from './types';
import { Loading } from '../Loading';

export const Button: FC<Props> = (props) => {
  const isDisabled = props.type === ButtonType.Disable;

  const buttonTypeClass = (() => {
    if (isDisabled) return 'bg-text-disabled text-black cursor-not-allowed';
    if (props.type === ButtonType.Destructive)
      return 'bg-destructive text-white';
    return 'bg-brand text-white';
  })();

  return (
    <button
      className={`${buttonTypeClass} rounded-lg p-3 pr-10 pl-10 font-medium w-full flex justify-center`}
      onClick={props.onClick}
    >
      {!props.isLoading ? props.text : <Loading />}
    </button>
  );
};
