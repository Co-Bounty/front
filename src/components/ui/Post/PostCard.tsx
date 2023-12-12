import MarkdownCard from '@components/common/Card/MarkdownCard/MarkdownCard';
import UserInfoCard from '@components/common/Card/UserInfoCard/UserInfoCard';
import { TagProps } from '@components/common/Tag/Tag';

interface PostCardProps {
  userName: string;
  profileImage: string;
  githubLink: string;
  tags: TagProps[];
  contents: string;
}

const PostCard = ({
  contents,
  githubLink,
  profileImage,
  userName,
  tags,
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
      <div>
        <MarkdownCard contents={contents} tags={tags} readonly={true} />
      </div>
    </div>
  );
};

export default PostCard;
