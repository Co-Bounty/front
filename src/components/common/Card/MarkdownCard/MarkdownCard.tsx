'use client';
import { useState } from 'react';
import Markdown from 'react-markdown';

import Tag, { TagProps } from '@components/common/Tag/Tag';
import { highlightType } from '@utils/types/common.type';

export interface ReviewCardProps {
  contents?: string;
  tags?: TagProps[];
  readonly?: boolean;
  highlight?: highlightType;
  setHighlightFuc?: (highlight: highlightType) => void;
}

const MarkdownCard = ({
  contents,
  tags,
  setHighlightFuc,
  highlight,
  readonly = false,
}: ReviewCardProps) => {
  const [reviewFocus, setReviewFocus] = useState<boolean>(false);

  const handleReviewClick = () => {
    if (readonly) return;
    if (setHighlightFuc) setHighlightFuc(highlight ?? {});

    if (reviewFocus && setHighlightFuc) setHighlightFuc({});

    setReviewFocus(!reviewFocus);
  };

  return (
    <div
      className={`flex flex-col p-4 justify-between rounded-md cursor-pointer bg-white
      ${reviewFocus ? `absolute inset-0 overflow-scroll` : ''}`}
      onClick={handleReviewClick}
    >
      <Markdown
        className={`prose prose-sm bg-white rounded-md w-full ${
          reviewFocus ? 'line-clamp-none' : 'line-clamp-5'
        }`}
      >
        {contents}
      </Markdown>
      {tags && (
        <div className={`flex flex-wrap gap-1 p-4`}>
          {tags.map((tag: TagProps) => (
            <Tag key={tag.text} emoji={tag.emoji} text={tag.text} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MarkdownCard;
