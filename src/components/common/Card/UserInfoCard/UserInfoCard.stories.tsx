import { Meta, StoryObj } from '@storybook/react';

import UserInfoCard from '@components/common/Card/UserInfoCard/UserInfoCard';

const meta = {
  title: 'Review/common/card/UserInfoCard',
  component: UserInfoCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserInfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defalut: Story = {
  args: {
    userName: 'dev-dong-su',
    githubLink: 'https://github.com/dev-dong-su',
    profileImage: 'https://avatars.githubusercontent.com/u/49144050?v=4',
  },
};
