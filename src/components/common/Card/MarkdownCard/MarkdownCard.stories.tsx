import { Meta, StoryObj } from '@storybook/react';

import MarkdownCard from '@components/common/Card/MarkdownCard/MarkdownCard';
import { markdownDummy } from '@utils/constants/dummy.constant';

const meta = {
  title: 'Review/common/card/MarkdownCard',
  component: MarkdownCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MarkdownCard>;

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
  },
};
