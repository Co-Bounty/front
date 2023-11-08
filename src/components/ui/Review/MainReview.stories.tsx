import { Meta, StoryObj } from '@storybook/react';

import MainReview from '@components/ui/Review/MainReview';
import {
  buttonCodeDummy,
  markdownDummy,
  markdownDummy2,
} from '@utils/constants/dummy.constant';

const meta = {
  title: 'Review/UI/MainReview',
  component: MainReview,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MainReview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defalut: Story = {
  args: {
    codeViewer: {
      code: buttonCodeDummy,
      language: 'jsx',
    },

    reviews: [
      {
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
          highlightStart: 15,
          highlightEnd: 20,
        },
      },
      {
        contents: markdownDummy2,
        tags: [
          {
            emoji: '♻️',
            text: '리펙토링',
          },
          {
            emoji: '🐛',
            text: '버그',
          },
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
          highlightStart: 5,
          highlightEnd: 20,
        },
      },
    ],
  },
};
