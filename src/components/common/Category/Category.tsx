import Image from 'next/image';

const Category = () => {
  return (
    <div className={'flex flex-col w-full items-center gap-10'}>
      <p className={'text-4xl text-white font-extrabold'}>🔥인기 카테고리</p>
      <div
        className={
          'flex w-5/6 m-auto justify-around text-white font-bold bg-coWhite gap-20 rounded-xl p-6'
        }
      >
        <div className={'flex flex-col items-center gap-2 cursor-pointer'}>
          <Image
            src="/images/frontend.png"
            alt={'front'}
            width={64}
            height={64}
          />
          Front-End
        </div>
        <div className={'flex flex-col items-center gap-2 cursor-pointer'}>
          <Image src="/images/back.png" alt={'back'} width={64} height={64} />
          Back-End
        </div>
        <div className={'flex flex-col items-center gap-2 cursor-pointer'}>
          <Image src="/images/app.png" alt={'app'} width={64} height={64} />
          App
        </div>
        <div className={'flex flex-col items-center gap-2 cursor-pointer'}>
          <Image
            src="/images/coding_test.png"
            alt={'coding-test'}
            width={64}
            height={64}
          />
          Coding Test
        </div>
      </div>
    </div>
  );
};

export default Category;
