import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
  color?: 'main' | 'light';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export function Text({
  color = 'light', size = 'md', children, asChild, ...props
}: TextProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      className={clsx('font-sans', {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',

        'text-main': color === 'main',
        'text-light': color === 'light',
      })}
      {...props}
    >
      {children}
    </Comp>
  );
}
