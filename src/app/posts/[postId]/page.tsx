'use client';

import { useRouter } from 'next/navigation';
import Markdown from 'react-markdown';

import { postApi } from '@api/post.api';
import Button from '@components/common/Button/Button';
import UserInfoCard from '@components/common/Card/UserInfoCard/UserInfoCard';
import Tag, { TagProps } from '@components/common/Tag/Tag';

interface PostProps {
  params: { postId: number };
}

export default async function Post({ params }: PostProps) {
  const router = useRouter();

  const { title, userInfo, contents, id, tags } = await postApi.getPostById(
    params.postId,
  );

  return (
    <div className={'flex flex-col items-center gap-10 mb-96'}>
      <div className={'flex flex-col gap-6 items-center'}>
        <div className={'text-4xl text-white'}>{title}</div>
        <div>
          {tags && (
            <div className={`flex flex-wrap gap-4`}>
              {tags.map((tag: TagProps) => (
                <Tag key={tag.text} emoji={tag.emoji} text={tag.text} />
              ))}
            </div>
          )}
        </div>
        <UserInfoCard
          userName={userInfo.userName}
          githubLink={userInfo.githubLink}
          profileImage={userInfo.profileImage}
          row={true}
        />
      </div>

      <div className={'w-3/6 mx-auto rounded-md bg-white'}>
        <Markdown className={'prose p-6 mx-auto'}>{contents}</Markdown>
      </div>
      <Button
        content={'코드 확인하기'}
        onClick={() => router.push(`/posts/${params.postId}/code`)}
      />
    </div>
  );
}
