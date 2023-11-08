import { Meta, StoryObj } from '@storybook/react';

import ReviewCard from '@components/common/ReviewCard/ReviewCard';
import { markdownDummy } from '@utils/constants/dummy.constant';

const meta = {
  title: 'Review/common/ReviewCard',
  component: ReviewCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ReviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defalut: Story = {
  args: {
    contents: markdownDummy,
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
    highlight: {
      highlightStart: 10,
      highlightEnd: 20,
    },
  },
};

export const Minimal: Story = {
  args: {
    ...Defalut.args,
    minimal: true,
  },
};
