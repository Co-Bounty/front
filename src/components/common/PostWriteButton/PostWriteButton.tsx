'use client';
import { useRouter } from 'next/navigation';

const PostWriteButton = () => {
  const router = useRouter();

  return (
    <div
      className={
        'fixed right-20 bottom-12 bg-coWhite text-white font-bold p-6 rounded-full cursor-pointer'
      }
      onClick={() => router.push('/posts/write')}
    >
      글 쓰기
    </div>
  );
};

export default PostWriteButton;
