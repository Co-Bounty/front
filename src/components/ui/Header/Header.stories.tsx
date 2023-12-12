import { Meta, StoryObj } from '@storybook/react';

import Header from '@components/ui/Header/Header';

const meta = {
  title: 'Review/ui/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defalut: Story = {};
