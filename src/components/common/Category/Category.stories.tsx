import { Meta, StoryObj } from '@storybook/react';

import Category from '@components/common/Category/Category';

const meta = {
  title: 'Review/common/Category',
  component: Category,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Category>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defalut: Story = {};
