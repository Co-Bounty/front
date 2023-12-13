'use client';

import { useRouter } from 'next/navigation';

import MarkdownCard from '@components/common/Card/MarkdownCard/MarkdownCard';
import UserInfoCard from '@components/common/Card/UserInfoCard/UserInfoCard';
import Tag, { TagProps } from '@components/common/Tag/Tag';
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
        'flex gap-10 items-center min-w-[853px] bg-coWhite py-4 px-10 rounded-md cursor-pointer'
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
        <div
          className={
            'bg-coWhite py-1 px-2 text-white text-xs rounded-full w-fit'
          }
        >
          {category}
        </div>
        <div className={'text-2xl text-white font-extrabold'}>{title}</div>
        <div>
          {tags && (
            <div className={`flex flex-wrap gap-1`}>
              {tags.map((tag: TagProps) => (
                <Tag key={tag.text} emoji={tag.emoji} text={tag.text} />
              ))}
            </div>
          )}
        </div>
        <MarkdownCard contents={contents} readonly={true} />
      </div>
    </div>
  );
};

export default PostCard;
