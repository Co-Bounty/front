'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Category = () => {
  const router = useRouter();
  return (
    <div className={'flex flex-col w-3/5 mx-auto items-center gap-10'}>
      <p className={'text-3xl text-white font-extrabold'}>🔥인기 카테고리</p>
      <div
        className={
          'flex w-5/6 m-auto justify-around text-white font-bold bg-coWhite gap-20 rounded-xl p-6'
        }
      >
        <div
          className={'flex flex-col items-center gap-2 cursor-pointer'}
          onClick={() => router.push('posts/category/FRONTEND')}
        >
          <Image
            src="/images/frontend.png"
            alt={'front'}
            width={48}
            height={48}
          />
          Front-End
        </div>
        <div
          className={'flex flex-col items-center gap-2 cursor-pointer'}
          onClick={() => router.push('posts/category/BACKEND')}
        >
          <Image src="/images/back.png" alt={'back'} width={48} height={48} />
          Back-End
        </div>
        <div
          className={'flex flex-col items-center gap-2 cursor-pointer'}
          onClick={() => router.push('posts/category/APP')}
        >
          <Image src="/images/app.png" alt={'app'} width={48} height={48} />
          App
        </div>
        <div
          className={'flex flex-col items-center gap-2 cursor-pointer'}
          onClick={() => router.push('posts/category/CODING_TEST')}
        >
          <Image
            src="/images/coding_test.png"
            alt={'coding-test'}
            width={48}
            height={48}
          />
          Coding Test
        </div>
      </div>
    </div>
  );
};

export default Category;
