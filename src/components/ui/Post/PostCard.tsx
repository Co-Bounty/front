import MarkdownCard from '@components/common/Card/MarkdownCard/MarkdownCard';
import UserInfoCard from '@components/common/Card/UserInfoCard/UserInfoCard';
import Tag, { TagProps } from '@components/common/Tag/Tag';
import { PostInfoType } from '@utils/types/common.type';

const PostCard = ({
  contents,
  userInfo,
  title,
  tags,
  postId,
}: PostInfoType) => {
  return (
    <div
      className={
        'flex gap-4 mx-auto w-1/2 bg-coWhite p-4 rounded-md cursor-pointer'
      }
    >
      <div>
        <UserInfoCard
          userName={userInfo.userName}
          githubLink={userInfo.githubLink}
          profileImage={userInfo.profileImage}
        />
      </div>
      <div className={'flex flex-col gap-2'}>
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
