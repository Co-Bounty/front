import { Meta, StoryObj } from '@storybook/react';

import DirectoryTree from '@components/common/DirectoryTree/DirectoryTree';

const meta = {
  title: 'Review/common/DirectoryTree',
  component: DirectoryTree,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DirectoryTree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      name: 'root',
      type: 'folder',
      path: '/root',
      children: [
        { name: 'file1.txt', type: 'file', path: '/root/subfolder/file1.txt' },
        { name: 'file2.png', type: 'file', path: '/root/subfolder/file2.png' },
        {
          path: '/root/subfolder',
          name: 'subfolder',
          type: 'folder',
          children: [
            {
              name: 'file3.md',
              type: 'file',
              path: '/root/subfolder/file3.md',
            },
          ],
        },
      ],
    },
  },
};
