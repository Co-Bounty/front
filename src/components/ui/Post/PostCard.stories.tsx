import { Meta, StoryObj } from '@storybook/react';

import PostCard from '@components/ui/Post/PostCard';

import { markdownDummy } from '../../../constants/dummy.constant';

const meta = {
  title: 'Review/ui/Post',
  component: PostCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defalut: Story = {
  args: {
    githubLink: 'https://github.com/dev-dong-su',
    profileImage:
      'https://avatars.githubusercontent.com/u/16986867?s=400&u=f7149ab3bdf5348647d4ff1ea96ac6747ec307c6&v=4',
    userName: 'dev-dong-su',
    title: '제목',
    tags: [
      {
        emoji: '♻️',
        text: '리펙토링',
      },
      {
        emoji: '🐛',
        text: '버그',
      },
    ],
    contents: markdownDummy,
  },
};
