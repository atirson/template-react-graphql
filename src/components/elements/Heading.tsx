import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: 'main' | 'light';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export function Heading({
  color = 'light', size = 'md', asChild, children, ...props
}: HeadingProps) {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={clsx('font-sans --tw-text-opacity-100', {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg',

        'text-main': color === 'main',
        'text-light': color === 'light',
      })}
      {...props}
    >
      {children}
    </Comp>
  );
}
