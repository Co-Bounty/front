import { Meta, StoryObj } from '@storybook/react';

import Tag from '@components/common/Tag/Tag';

const meta = {
  title: 'Review/common/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defalut: Story = {
  args: {
    emoji: '👍',
    text: '좋아요',
  },
};
