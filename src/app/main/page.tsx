import { postApi } from '@api/post.api';
import Category from '@components/common/Category/Category';
import PostWriteButton from '@components/common/PostWriteButton/PostWriteButton';
import PostCard from '@components/ui/Post/PostCard';

export default async function Main() {
  const data = await postApi.getPosts();

  return (
    <div className={'w-full h-screen rounded-md'}>
      <Category />
      <p className={'text-4xl text-white font-extrabold text-center mt-24'}>
        💡최신 글
      </p>
      <div className={'flex flex-col items-center my-10 gap-6'}>
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
      <PostWriteButton />
    </div>
  );
}
