import { ReactNode, CSSProperties } from 'react';
import { VerticalTimelineElementProps }  from 'react-vertical-timeline-component';


export type ExperienceProps = {
  id: string,
  props: {
    date: string,
    className: string,
    contentStyle: CSSProperties | undefined,
    contentArrowStyle: CSSProperties | undefined,
    iconStyle: CSSProperties | undefined,
    icon?: boolean | string | undefined,
  },
  title: string,
  subtitle: string,
  content: string,
}
