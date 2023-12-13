import { postApi } from '@api/post.api';
import Category from '@components/common/Category/Category';
import PostCard from '@components/ui/Post/PostCard';

export default async function Main() {
  const data = await postApi.getPost();

  return (
    <div className={'w-full h-screen rounded-md'}>
      <Category />
      <p className={'text-4xl text-white font-extrabold text-center mt-24'}>
        💡최신 글
      </p>
      <div className={'flex flex-row my-10 gap-4'}>
        {data &&
          data.map((post) => (
            <PostCard
              postId={post.postId}
              userInfo={post.userInfo}
              contents={post.contents}
              title={post.title}
              tags={post.tags}
            />
          ))}
      </div>
    </div>
  );
}
