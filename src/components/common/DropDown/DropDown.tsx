'use client';
import { useState } from 'react';

import Button from '@components/common/Button/Button';

interface DropDownProps {
  children?: never;
}

const DropDown = ({ children }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <Button content={'메뉴'} onClick={toggleDropdown} />

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
          <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Link 1
          </div>
          <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Link 2
          </div>
          <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Link 3
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
