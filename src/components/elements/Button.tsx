import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'main' | 'gray' | 'dark';
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  color = 'main', size = 'md', children, asChild,
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx('py-2 px-3 h-[40px] rounded-md text-white w-full font-bold flex justify-center items-center gap-3', {
        'bg-main': color === 'main',
        'bg-gray-600': color === 'gray',
        'bg-gray-900': color === 'dark',

        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
      })}
    >
      {children}
    </Comp>
  );
}
