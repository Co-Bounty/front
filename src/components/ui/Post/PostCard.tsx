'use client';

import { useRouter } from 'next/navigation';

import MarkdownCard from '@components/common/Card/MarkdownCard/MarkdownCard';
import UserInfoCard from '@components/common/Card/UserInfoCard/UserInfoCard';
import Tag from '@components/common/Tag/Tag';
import { PostInfoType } from '@utils/types/common.type';

const PostCard = ({
  contents,
  userInfo,
  title,
  tags,
  category,
  id,
}: PostInfoType) => {
  const router = useRouter();

  const handlePostClick = () => {
    router.push(`/posts/${id}`);
  };

  return (
    <div
      className={
        'flex gap-4 items-center min-w-[600px] max-w-[600px] min-h-[350px] max-h-[350px] bg-coWhite p-4 rounded-md cursor-pointer'
      }
      onClick={handlePostClick}
    >
      <div>
        <UserInfoCard
          userName={userInfo.userName}
          githubLink={userInfo.githubLink}
          profileImage={userInfo.profileImage}
        />
      </div>
      <div className={'flex flex-col gap-2'}>
        <div className={' text-white text-xs rounded-full w-fit'}>
          {category}
        </div>
        <div className={'text-3xl text-white font-extrabold'}>{title}</div>
        <MarkdownCard contents={contents} readonly={true} />
        <div>
          {tags && (
            <div className={`flex flex-wrap gap-1`}>
              {tags.map((tag, index) => {
                if (index > 4) return;
                return <Tag key={tag} text={tag} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
