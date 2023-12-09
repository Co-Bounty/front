import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import { FileSystemItem } from '@utils/types/common.type';

interface DirectoryTreeProps {
  data: FileSystemItem;
}

const DirectoryTree = ({ data }: DirectoryTreeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  if (data.type === 'folder') {
    return (
      <div>
        <div
          onClick={toggle}
          className={`
        ${'text-white'}
        `}
        >
          <FontAwesomeIcon icon={'folder'} /> {' ' + data.name}
        </div>
        {isOpen && data.children && (
          <div style={{ paddingLeft: '20px' }}>
            {data.children.map((child) => (
              <DirectoryTree key={child.name} data={child} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return <div className={'text-white'}>{' ' + data.name}</div>;
};

export default DirectoryTree;
