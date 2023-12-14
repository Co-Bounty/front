'use client';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

import { postApi } from '@api/post.api';
import UserInfoCard from '@components/common/Card/UserInfoCard/UserInfoCard';
import Tag from '@components/common/Tag/Tag';
import { PostInfoType } from '@utils/types/common.type';

interface PostModalProps {
  postId: string;
  close: () => void;
}

const PostModal = ({ postId, close }: PostModalProps) => {
  const [postData, setPostData] = useState<PostInfoType>();

  const getPostData = async () => {
    const data = await postApi.getPostById(postId);
    setPostData(data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div
      className={
        'fixed left-0 right-0 top-10 mx-auto  bg-coDark border border-slate-500 w-1/2 h-5/6 overflow-auto p-6 rounded-md'
      }
      onClick={close}
    >
      <div className={'flex flex-col gap-6 items-center'}>
        <div className={'text-4xl text-white'}>{postData?.title}</div>
        <div>
          {postData?.tags && (
            <div className={`flex flex-wrap gap-4`}>
              {postData.tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          )}
        </div>
        {postData?.userInfo && (
          <UserInfoCard
            userName={postData.userInfo.userName}
            githubLink={postData.userInfo.githubLink}
            profileImage={postData.userInfo.profileImage}
            row={true}
          />
        )}
      </div>

      <div className={'w-full mt-6 mx-auto rounded-md'}>
        <Markdown className={'prose p-6 mx-auto prose-invert'}>
          {postData?.contents}
        </Markdown>
      </div>
    </div>
  );
};

export default PostModal;
