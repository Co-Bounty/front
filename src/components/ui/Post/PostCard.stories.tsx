import { Meta, StoryObj } from '@storybook/react';

import PostCard from '@components/ui/Post/PostCard';
import { markdownDummy } from '@utils/constants/dummy.constant';

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
    contents: markdownDummy,
  },
};
