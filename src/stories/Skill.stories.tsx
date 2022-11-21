import { Meta, StoryObj } from '@storybook/react';
import { Skill, SkillProps } from '@components/elements/Skill';

export default {
  title: 'Components/Skill',
  component: Skill,
  args: {
    src: 'https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg',
    alt: 'React',
    width: 50,
    href: 'https://reactjs.org/',
  },
  argTypes: {},
} as Meta<SkillProps>;

export const Default: StoryObj<SkillProps> = {};
