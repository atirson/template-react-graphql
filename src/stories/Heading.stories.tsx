import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from '@components/elements/Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Portfolio Heading Atirson Fabiano',
    size: 'md',
    color: 'light',
  },
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};
