'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

import { postApi } from '@api/post.api';
import Button from '@components/common/Button/Button';
import UserInfoCard from '@components/common/Card/UserInfoCard/UserInfoCard';
import Tag from '@components/common/Tag/Tag';
import { PostInfoType, PostReviewType } from '@utils/types/common.type';

interface PostProps {
  params: { postId: string };
}

export default function Post({ params }: PostProps) {
  const router = useRouter();
  const [posts, setPosts] = useState<PostInfoType>();
  const [reviews, setReviews] = useState<PostReviewType>();

  const getPost = async () => {
    setPosts(await postApi.getPostById(params.postId));
  };

  const getPostReview = async () => {
    setReviews(await postApi.getPostReviews(params.postId));
  };

  useEffect(() => {
    getPost();
    getPostReview();
  }, []);

  return (
    <div className={'flex flex-col items-center gap-10 mb-96'}>
      <div className={'flex flex-col gap-6 items-center'}>
        <div className={'text-4xl text-white'}>{posts?.title}</div>
        <div>
          {posts?.tags && (
            <div className={`flex flex-wrap gap-4`}>
              {posts?.tags.map((tag, index) => {
                if (index > 4) return;
                return <Tag key={tag} text={tag} />;
              })}
            </div>
          )}
        </div>
        {posts?.userInfo && (
          <UserInfoCard
            userName={posts.userInfo.userName}
            githubLink={posts.userInfo.githubLink}
            profileImage={posts.userInfo.profileImage}
            row={true}
          />
        )}
      </div>

      <div className={'w-[80%] mx-auto rounded-md'}>
        <Markdown className={'prose prose-xl prose-invert p-6 mx-auto'}>
          {posts?.contents}
        </Markdown>
      </div>
      <Button
        content={'코드 확인하기'}
        size={'large'}
        onClick={() => router.push(`/posts/${params.postId}/code`)}
      />
      <div
        className={
          'fixed right-20 bottom-12 bg-coWhite text-white font-bold p-6 rounded-full cursor-pointer'
        }
        onClick={() => router.push(`/posts/${params.postId}/review/new`)}
      >
        리뷰 작성
      </div>
      <div>{reviews && reviews.contents}</div>
    </div>
  );
}
