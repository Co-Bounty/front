import Image from 'next/image';
import Link from 'next/link';

import Button from '@components/common/Button/Button';
import { UserInfoType } from '@utils/types/common.type';

const UserInfoCard = ({ userName, githubLink, profileImage }: UserInfoType) => {
  return (
    <div
      className={
        'flex flex-col w-32 h-full gap-4 justify-center items-center bg-coWhite rounded-md p-4 text-white'
      }
    >
      <Image
        src={profileImage}
        alt={'profile image'}
        width={120}
        height={120}
        className={'rounded-full shadow-md'}
      />
      <div className={'font-bold'}>{userName}</div>
      <Link href={githubLink}>
        <Button content={'GitHub'} />
      </Link>
    </div>
  );
};

export default UserInfoCard;
