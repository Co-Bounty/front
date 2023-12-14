import Image from 'next/image';
import Link from 'next/link';

import Button from '@components/common/Button/Button';
import { UserInfoType } from '@utils/types/common.type';

const UserInfoCard = ({
  userName,
  githubLink,
  profileImage,
  row,
}: UserInfoType) => {
  const image = 'https://avatars.githubusercontent.com/u/49144050?v=4';
  return (
    <div
      className={`flex h-full gap-4 justify-center items-center rounded-md p-2 text-white
        ${row ? 'flex-row w-fit' : 'flex-col w-32'}`}
    >
      <Image
        src={profileImage === 'test' ? image : profileImage}
        alt={'profile image'}
        width={64}
        height={64}
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
