'use client';
import MDEditor from '@uiw/react-md-editor';
import React, { useState } from 'react';

import Button from '@components/common/Button/Button';
import { ReviewCodeType } from '@utils/types/common.type';

interface PostModalProps {
  postId: string;
  close: () => void;
  reviews: ReviewCodeType;
}

const ReviewContents = ({ close }: PostModalProps) => {
  const [value, setValue] = useState<string>('');

  const handleEditorChange = (newValue?: string) => {
    setValue(newValue || '');
  };

  return (
    <div
      className={
        'fixed left-0 right-0 top-10 mx-auto  bg-coDark border border-slate-500 w-1/2 h-5/6 overflow-auto p-6 rounded-md'
      }
    >
      <div
        className={
          'flex w-[90%] mx-auto h-full flex-col gap-6 items-center justify-center'
        }
      >
        <div className={'text-3xl font-extrabold text-white'}>
          리뷰 본문 작성
        </div>
        <MDEditor value={value} onChange={handleEditorChange} height={500} />

        <div className={'w-full flex justify-end gap-4 mt-4'}>
          <Button content={'취소'} onClick={close} />
          <Button content={'저장'} />
        </div>
      </div>
    </div>
  );
};

export default ReviewContents;
