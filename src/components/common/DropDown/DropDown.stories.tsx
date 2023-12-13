import { Meta, StoryObj } from '@storybook/react';

import DropDown from '@components/common/DropDown/DropDown';

const meta = {
  title: 'Review/common/DropDown',
  component: DropDown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defalut: Story = {};
