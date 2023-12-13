'use client';

import MDEditor from '@uiw/react-md-editor';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { postApi } from '@api/post.api';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import { userState } from '@utils/atom/user.atom';

export default function PostWrite() {
  const router = useRouter();
  const userStateValue = useRecoilValue(userState);
  const [titleValue, setTitleValue] = useState<string>('');
  const [githubLinkValue, setGithubLinkValue] = useState<string>('');
  const [contentValue, setContentValue] = useState<string>('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  const handleGithubLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGithubLinkValue(e.target.value);
  };

  const handleEditorChange = (newValue?: string) => {
    setContentValue(newValue || '');
  };

  const handleSave = async () => {
    await postApi.addPost({
      title: titleValue,
      githubLink: githubLinkValue,
      contents: contentValue,
      userInfo: userStateValue,
    });

    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className={'h-screen'}>
      <div className={'flex flex-col gap-4 mb-10'}>
        <div className={'flex gap-6 items-center'}>
          <Input
            onChange={handleTitleChange}
            value={titleValue}
            placeholder={'제목을 작성해 주세요.'}
            style={'text-3xl font-extrabold'}
          />
        </div>
        <div className={'flex gap-6 items-center'}>
          <Input
            onChange={handleGithubLinkChange}
            value={githubLinkValue}
            placeholder={'GitHub Link를 올려주세요.'}
            style={'text-3xl font-extrabold'}
          />
        </div>
      </div>
      <MDEditor
        value={contentValue}
        onChange={handleEditorChange}
        height={700}
      />
      <div className={'flex pt-10 pb-16 gap-4 justify-end'}>
        <Button content={'취소'} size={'large'} onClick={handleCancel} />
        <Button content={'저장'} size={'large'} onClick={handleSave} />
      </div>
    </div>
  );
}
