import { postApi } from '@api/post.api';
import Category from '@components/common/Category/Category';
import PostWriteButton from '@components/common/PostWriteButton/PostWriteButton';
import Banner from '@components/ui/Banner/Banner';
import PostCard from '@components/ui/Post/PostCard';

export default async function Main() {
  const data = await postApi.getPosts();

  console.log(data);
  return (
    <div className={'w-full h-screen rounded-md'}>
      <div
        className={'w-[80%] max-w-6xl bg-coWhite rounded-md pt-4 mb-20 mx-auto'}
      >
        <Banner />
      </div>
      <Category />
      <p className={'text-3xl text-white font-extrabold text-center mt-24'}>
        💡최신 글
      </p>
      <div
        className={
          'flex flex-wrap justify-center w-[80%] mx-auto items-center my-10 gap-6'
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
      <div className={'mt-24'}>co-bounty</div>
      <PostWriteButton />
    </div>
  );
}
