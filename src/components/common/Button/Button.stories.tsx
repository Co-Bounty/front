import { Meta, StoryObj } from '@storybook/react';

import Button from '@components/common/Button/Button';

const meta = {
  title: 'Review/common/Button/PrimaryButton',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defalut: Story = {
  args: {
    content: 'Button',
    size: 'medium',
  },
};
