import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '@components/elements/Button';
import { Envelope } from 'phosphor-react';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    size: 'md',
    color: 'main',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    color: {
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: ['Button', <Envelope size={24} key={1} />],
  },
};
