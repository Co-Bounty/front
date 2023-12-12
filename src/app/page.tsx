'use client';

import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import { authApi } from '@api/auth.api';
import Button from '@components/common/Button/Button';
import Tag from '@components/common/Tag/Tag';
import { userState } from '@utils/atom/user.atom';

export default function Home() {
  const router = useRouter();
  const setRecoilState = useSetRecoilState(userState);
  const tags = [
    { emoji: '🩻', text: '아키텍처', x: '20%', y: '30%', rotate: 'rotate-12' },
    {
      emoji: '💡',
      text: '새로운 관점',
      x: '70%',
      y: '20%',
      rotate: '-rotate-2',
    },
    { emoji: '🐛', text: '버그', x: '40%', y: '15%', rotate: 'rotate-6' },
    { emoji: '♻️', text: '리펙토링', x: '55%', y: '25%', rotate: '-rotate-12' },
  ];

  const handleLoginButton = async () => {
    const data = await authApi.login();
    setRecoilState(data);
    router.push('/main');
  };

  return (
    <div className={'h-screen w-screen'}>
      {tags.map((tag, index) => (
        <div
          key={index}
          className={tag.rotate}
          style={{
            position: 'absolute',
            left: tag.x,
            top: tag.y,
          }}
        >
          <Tag emoji={tag.emoji} text={tag.text} />
        </div>
      ))}
      <div className={'flex flex-col items-center justify-center h-full'}>
        <h1 className={'text-4xl text-white font-extrabold'}>Co-Bounty</h1>
        <div className={'mt-6'}>
          <Button
            content={'GitHub 로그인'}
            size={'large'}
            onClick={handleLoginButton}
          />
        </div>
      </div>
    </div>
  );
}
