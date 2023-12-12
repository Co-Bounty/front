import MarkdownCard from '@components/common/Card/MarkdownCard/MarkdownCard';
import UserInfoCard from '@components/common/Card/UserInfoCard/UserInfoCard';
import Tag, { TagProps } from '@components/common/Tag/Tag';

interface PostCardProps {
  userName: string;
  profileImage: string;
  title: string;
  githubLink: string;
  tags?: TagProps[];
  contents: string;
}

const PostCard = ({
  contents,
  githubLink,
  profileImage,
  userName,
  tags,
  title,
}: PostCardProps) => {
  return (
    <div className={'flex gap-4 min-w-fit bg-coWhite p-4 rounded-md'}>
      <div>
        <UserInfoCard
          userName={userName}
          githubLink={githubLink}
          profileImage={profileImage}
        />
      </div>
      <div className={'flex flex-col gap-2'}>
        <div className={'text-3xl text-white font-extrabold'}>{title}</div>
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
