'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { codeApi } from '@api/code.api';
import Button from '@components/common/Button/Button';
import CodeViewer from '@components/common/CodeViewer/CodeViewer';
import DirectoryTree from '@components/common/DirectoryTree/DirectoryTree';
import PostModal from '@components/common/PostModal/PostModal';
import { FileDirectoryType } from '@utils/types/common.type';

interface PostProps {
  params: { postId: string };
}

export default function Code({ params }: PostProps) {
  const router = useRouter();
  const [openPost, setOpenPost] = useState<boolean>(false);
  const [directoryTree, setDirectoryTree] = useState<FileDirectoryType>();
  const [codeViewer, setCodeViewer] = useState({
    code: '',
    language: '',
  });

  const getDirectoryTree = async () => {
    const data = await codeApi.getCode(params.postId);
    return setDirectoryTree(data);
  };

  const handleSelectFile = async (path: string) => {
    const code = await codeApi.getGitHubCode(path);
    const language = path.split('.').pop();
    setCodeViewer({ code: code, language: language ? language : 'txt' });
  };

  const handleViewPost = () => {
    setOpenPost(!openPost);
  };

  useEffect(() => {
    getDirectoryTree();
  }, []);

  return (
    <>
      <div className={'flex flex-col items-center my-4'}>
        {openPost && (
          <PostModal postId={params.postId} close={handleViewPost} />
        )}
      </div>
      <div className={'flex h-screen w-full'}>
        <div className={'bg-coWhite rounded-md w-[20%] h-screen p-4'}>
          <div className={'my-6 w-full'}>
            <Button
              content={'게시글 보기'}
              size={'large'}
              onClick={handleViewPost}
            />
          </div>
          {directoryTree && (
            <DirectoryTree
              data={directoryTree.file}
              onSelect={handleSelectFile}
            />
          )}
        </div>
        <div className={'flex w-full bg-coDark'}>
          <div className={`w-full`}>
            <CodeViewer code={codeViewer.code} language={codeViewer.language} />
          </div>
        </div>
      </div>
      <div
        className={
          'fixed right-20 bottom-12 bg-coWhite text-white font-bold p-6 rounded-full cursor-pointer'
        }
        onClick={() => router.push(`/posts/${params.postId}/review/new`)}
      >
        리뷰 작성
      </div>
    </>
  );
}
