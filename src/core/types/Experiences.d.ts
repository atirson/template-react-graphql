import { ReactNode } from 'react';

export type ExperienceProps = {
  id: string,
  props: {
    date: string,
    className: string,
    contentStyle: unknown,
    contentArrowStyle: unknown,
    iconStyle: unknown,
    icon: ReactNode,
  },
  title: string,
  subtitle: string,
  content: string,
}