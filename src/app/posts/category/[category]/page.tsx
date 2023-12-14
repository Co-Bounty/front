import { postApi } from '@api/post.api';
import PostCard from '@components/ui/Post/PostCard';

interface PostListProps {
  params: { category: string };
}

export default async function PostList({ params }: PostListProps) {
  const data = await postApi.getPostByCategory(params.category);
  return (
    <>
      <p className={'text-3xl text-white font-extrabold text-center mt-24'}>
        💡{params.category}
      </p>
      <div
        className={
          'flex flex-col justify-center w-[80%] mx-auto items-center my-10 gap-6'
        }
      >
        {data &&
          data.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              category={post.category}
              userInfo={post.userInfo}
              contents={post.contents}
              title={post.title}
              tags={post.tags}
            />
          ))}
      </div>
    </>
  );
}
