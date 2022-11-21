import { Meta, StoryObj } from '@storybook/react';
import { IconBackground, IconBackgroundProps } from '@components/elements/Icon';
import { InstagramLogo } from 'phosphor-react';

export default {
  title: 'Components/Icon',
  component: IconBackground,
  args: {
    children: [<InstagramLogo size={32} className="text-white" key={1} />],
    bgColor: 'main',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    bgColor: {
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<IconBackgroundProps>;

export const Default: StoryObj<IconBackgroundProps> = {};

export const WithoutIcon: StoryObj<IconBackgroundProps> = {
  args: {
    children: '',
    bgColor: 'main',
  },
};
