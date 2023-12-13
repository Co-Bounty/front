'use client';
import { useRouter } from 'next/navigation';

import DropDown from '@components/common/DropDown/DropDown';

const Header = () => {
  const router = useRouter();
  return (
    <div
      className={
        'flex justify-between items-center w-4/6 mx-auto h-16 mt-6 cursor-pointer'
      }
    >
      <div
        className={'text-white text-3xl font-bold'}
        onClick={() => router.push('/main')}
      >
        Co-Bounty
      </div>
      <DropDown />
    </div>
  );
};

export default Header;
