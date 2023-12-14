import { faFile, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

import { FileSystemItem } from '@utils/types/common.type';

interface DirectoryTreeProps {
  data: FileSystemItem;
  onSelect?: (path: string) => void;
}

const DirectoryTree = ({ data, onSelect }: DirectoryTreeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filePath, setFilePath] = useState<string | null>('');

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (data.type === 'file') {
      setFilePath(data.url);
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
          <FontAwesomeIcon icon={faFolder} /> {data.fileName}
        </div>
        {isOpen && data.children && (
          <div style={{ paddingLeft: '20px' }}>
            {data.children.map((child) => (
              <DirectoryTree
                key={child.fileName}
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
      onClick={() => onSelect && onSelect(filePath!)}
    >
      <FontAwesomeIcon icon={faFile} /> {data.fileName}
    </div>
  );
};

export default DirectoryTree;
