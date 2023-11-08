import { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Tag, { TagProps } from '@components/common/Tag/Tag';
import { highlightType } from '@utils/types/common.type';

export interface ReviewCardProps {
  contents?: string;
  minimal?: boolean;
  tags?: TagProps[];
  highlight?: highlightType;
  setHighlightFuc?: (highlight: highlightType) => void;
}

const ReviewCard = ({
  contents,
  minimal,
  tags,
  setHighlightFuc,
  highlight,
}: ReviewCardProps) => {
  const [reviewFocus, setReviewFocus] = useState<boolean>(false);

  const handleReviewClick = () => {
    if (setHighlightFuc) setHighlightFuc(highlight ?? {});

    if (reviewFocus && setHighlightFuc) setHighlightFuc({});

    setReviewFocus(!reviewFocus);
  };

  return (
    <div
      className={`border-2 m-2 rounded-xl bg-white cursor-pointer overflow-scroll transition-all duration-300 ease-in-out 
      ${reviewFocus ? `absolute inset-0` : ``} 
      ${minimal ? 'p-6' : 'p-10'}`}
      onClick={handleReviewClick}
    >
      <Markdown
        remarkPlugins={[remarkGfm]}
        className={`prose bg-white w-full ${minimal && 'prose-sm'} ${
          reviewFocus ? 'line-clamp-none' : 'line-clamp-5'
        }`}
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
