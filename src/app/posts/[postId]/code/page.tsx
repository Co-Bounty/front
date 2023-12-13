'use client';

import React, { useEffect, useState } from 'react';

import { codeApi } from '@api/code.api';
import CodeViewer from '@components/common/CodeViewer/CodeViewer';
import DirectoryTree from '@components/common/DirectoryTree/DirectoryTree';
import { FileDirectoryType } from '@utils/types/common.type';

interface PostProps {
  params: { postId: number };
}

export default function Code({ params }: PostProps) {
  const [directoryTree, setDirectoryTree] = useState<FileDirectoryType>();
  const [codeViewer, setCodeViewer] = useState({
    code: '',
    language: '',
  });

  const getDirectoryTree = async () => {
    return setDirectoryTree(await codeApi.getCode(params.postId));
  };

  const handleSelectFile = async (path: string) => {
    const code = await codeApi.getGitHubCode(path);
    const language = path.split('.')[1];
    setCodeViewer({ code: code, language });
  };

  useEffect(() => {
    getDirectoryTree();
  }, []);

  return (
    <div className={'flex h-screen w-full'}>
      <div className={'bg-coWhite rounded-md w-[15%] h-screen p-4'}>
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
  );
}

// <div
//   className={`relative flex flex-col w-[40%] bg-coDark items-center p-2 gap-2`}
// >
//   {reviews ? (
//     <>
//       {reviews.reviews &&
//         reviews.reviews.map((review, index) => (
//           <div
//             className={'border-2 border-gray-500 rounded-md'}
//             key={index}
//           >
//             <ContantsCard
//               contents={review.contents}
//               tags={review.tags}
//               highlight={review.highlight}
//               setHighlightFuc={handleHighlight}
//             />
//           </div>
//         ))}
//     </>
//   ) : (
//     <>아직 리뷰가 없어요!</>
//   )}
// </div>
