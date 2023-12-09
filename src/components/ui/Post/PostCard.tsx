import Markdown from 'react-markdown';

interface PostCardProps {
  contents: string;
}

const PostCard = ({ contents }: PostCardProps) => {
  return (
    <div className={'min-w-fit bg-coWhite p-4 rounded-md'}>
      <div>
        <Markdown className={`prose prose-sm w-full line-clamp-5`}>
          {contents}
        </Markdown>
      </div>
    </div>
  );
};

export default PostCard;
