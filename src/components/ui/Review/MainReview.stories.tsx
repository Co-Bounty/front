import { Meta, StoryObj } from '@storybook/react';

import MainReview from '@components/ui/Review/MainReview';
import { buttonCodeDummy, markdownDummy } from '@utils/dummy';

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
      },
    ],
  },
};

export const ReviewOnClicked: Story = {
  args: {
    ...Defalut.args,
    codeViewer: {
      ...Defalut.args.codeViewer,
      highlight: {
        highlightStart: 1,
        highlightEnd: 10,
      },
    },
  },
};
