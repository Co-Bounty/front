import React, { useEffect, useState } from 'react';

import { FileSystemItem } from '@utils/types/common.type';

interface DirectoryTreeProps {
  data: FileSystemItem;
  onSelect?: (path: string) => void;
}

const DirectoryTree = ({ data, onSelect }: DirectoryTreeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filePath, setFilePath] = useState<string>('');

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (data.type === 'file') {
      setFilePath(data.path);
    }
  }, []);

  if (data.type === 'folder') {
    return (
      <div>
        <div
          onClick={toggle}
          className={`
        ${'text-white cursor-pointer'}
        `}
        >
          {data.name}
        </div>
        {isOpen && data.children && (
          <div style={{ paddingLeft: '20px' }}>
            {data.children.map((child) => (
              <DirectoryTree
                key={child.name}
                data={child}
                onSelect={onSelect}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={'text-white cursor-pointer'}
      onClick={() => onSelect && onSelect(filePath)}
    >
      {' ' + data.name}
    </div>
  );
};

export default DirectoryTree;
