import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Tag, { TagProps } from '@components/common/Tag/Tag';

export interface ReviewCardProps {
  contents?: string;
  minimal?: boolean;
  tags?: TagProps[];
  lineStart?: number;
  lineEnd?: number;
}

const ReviewCard = ({
  contents,
  minimal,
  tags,
  lineStart,
  lineEnd,
}: ReviewCardProps) => {
  return (
    <div className={`border-2 rounded-xl ${minimal ? 'p-6' : 'p-10'}`}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        className={`prose ${minimal && 'w-full prose-sm line-clamp-5'}`}
      >
        {contents}
      </Markdown>
      {tags && (
        <div
          className={`flex h-vh flex-wrap gap-1 p-4 ${
            minimal ? 'text-xs' : 'text-sm'
          }`}
        >
          {tags.map((tag: TagProps) => (
            <Tag key={tag.text} emoji={tag.emoji} text={tag.text} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
