import Image from 'next/image';
import Link from 'next/link';

import Button from '@components/common/Button/Button';

interface UserInfoCardProps {
  userName: string;
  profileImage: string;
  githubLink: string;
}

const UserInfoCard = ({
  userName,
  githubLink,
  profileImage,
}: UserInfoCardProps) => {
  return (
    <div
      className={
        'flex flex-col h-full gap-2 justify-center items-center bg-coWhite rounded-md p-4 text-white'
      }
    >
      <Image
        src={profileImage}
        alt={'profile image'}
        width={100}
        height={100}
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
