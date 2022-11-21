import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '@components/elements/Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Portfolio Text Atirson Fabiano',
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
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};
