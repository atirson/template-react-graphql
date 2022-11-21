import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface IconBackgroundProps {
  bgColor?: 'main' | 'gray';
  children: ReactNode;
}

export function IconBackground({ bgColor = 'main', children }: IconBackgroundProps) {
  return (
    <div
      className={clsx('mask mask-hexagon flex justify-center w-[54px] items-center h-[54px]', {
        'bg-main': bgColor === 'main',
        'bg-gray-600': bgColor === 'gray',
      })}
    >
      {children}
    </div>
  );
}
