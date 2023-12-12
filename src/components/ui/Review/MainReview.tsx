import { useState } from 'react';

import ContantsCard, {
  ReviewCardProps,
} from '@components/common/Card/MarkdownCard/MarkdownCard';
import CodeViewer, {
  CodeViewerProps,
} from '@components/common/CodeViewer/CodeViewer';
import { highlightType } from '@utils/types/common.type';

export interface MainReviewProps {
  codeViewer: CodeViewerProps;
  reviews?: ReviewCardProps[];
}

const MainReview = ({ codeViewer, reviews }: MainReviewProps) => {
  const [highlight, setHighlight] = useState<highlightType>({});

  const handleHighlight = (highlight: highlightType) => {
    setHighlight(highlight);
  };

  return (
    <div className={`flex`}>
      <div className={`w-full`}>
        <CodeViewer
          code={codeViewer.code}
          language={codeViewer.language}
          highlight={highlight}
        />
      </div>
      <div className={`relative flex flex-col items-center w-4/5 p-2 gap-2`}>
        {reviews ? (
          <>
            {reviews.map((review, index) => (
              <ContantsCard
                key={index}
                contents={review.contents}
                tags={review.tags}
                highlight={review.highlight}
                minimal={true}
                setHighlightFuc={handleHighlight}
              />
            ))}
          </>
        ) : (
          <>아직 리뷰가 없어요!</>
        )}
      </div>
    </div>
  );
};

export default MainReview;
