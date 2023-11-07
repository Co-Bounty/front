import CodeViewer, {
  CodeViewerProps,
} from '@components/common/CodeViewer/CodeViewer';
import ReviewCard, {
  ReviewCardProps,
} from '@components/common/ReviewCard/ReviewCard';

export interface MainReviewProps {
  codeViewer: CodeViewerProps;
  reviews?: ReviewCardProps[];
}

const MainReview = ({ codeViewer, reviews }: MainReviewProps) => {
  return (
    <div className={`flex`}>
      <div className={`w-full`}>
        <CodeViewer
          code={codeViewer.code}
          language={codeViewer.language}
          highlight={codeViewer.highlight}
        />
      </div>
      <div className={`flex flex-col w-3/5 p-2`}>
        {reviews ? (
          <>
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                contents={review.contents}
                tags={review.tags}
                minimal={true}
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
