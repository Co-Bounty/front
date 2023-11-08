import { Meta, StoryObj } from '@storybook/react';

import CodeViewer from '@components/common/CodeViewer/CodeViewer';
import { buttonCodeDummy } from '@utils/constants/dummy.constant';

const meta = {
  title: 'Review/common/CodeViewer',
  component: CodeViewer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CodeViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defalut: Story = {
  args: {
    code: buttonCodeDummy,
    language: 'jsx',
  },
};

export const Highlight: Story = {
  args: {
    ...Defalut.args,
    highlight: {
      highlightStart: 10,
      highlightEnd: 20,
    },
  },
};
