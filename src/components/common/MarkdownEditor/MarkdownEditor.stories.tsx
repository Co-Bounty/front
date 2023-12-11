import { Meta, StoryObj } from '@storybook/react';

import MarkdownEditor from '@components/common/MarkdownEditor/MarkdownEditor';

const meta = {
  title: 'Review/common/MarkdownEditor',
  component: MarkdownEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MarkdownEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defalut: Story = {};
