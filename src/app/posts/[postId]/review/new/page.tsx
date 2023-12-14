'use client';

import MDEditor from '@uiw/react-md-editor';
import React, { useEffect, useState } from 'react';

import { codeApi } from '@api/code.api';
import Button from '@components/common/Button/Button';
import MarkdownCard from '@components/common/Card/MarkdownCard/MarkdownCard';
import CodeViewer from '@components/common/CodeViewer/CodeViewer';
import DirectoryTree from '@components/common/DirectoryTree/DirectoryTree';
import Input from '@components/common/Input/Input';
import PostModal from '@components/common/PostModal/PostModal';
import ReviewContents from '@components/common/ReviewContents/ReviewContents';
import {
  FileDirectoryType,
  highlightType,
  ReviewCodeType,
} from '@utils/types/common.type';

interface PostProps {
  params: { postId: string };
}

export default function NewReview({ params }: PostProps) {
  const [openPost, setOpenPost] = useState<boolean>(false);
  const [directoryTree, setDirectoryTree] = useState<FileDirectoryType>();
  const [highlight, setHighlight] = useState<highlightType>({
    highlightStart: 0,
    highlightEnd: 0,
  });
  const [reviews, setReviews] = useState<ReviewCodeType>({
    reviews: [],
  });
  const [codeViewer, setCodeViewer] = useState({
    code: '',
    language: '',
  });
  const [startReview, setStartReview] = useState<boolean>(false);
  const [markdownValue, setMarkdownValue] = useState<string>();
  const [selectedFile, setSelectedFile] = useState<string>('');
  const [endReview, setEndReview] = useState<boolean>(false);
  const [startH, setStartH] = useState<string>('0');
  const [endH, setEndH] = useState<string>('0');

  const getDirectoryTree = async () => {
    return setDirectoryTree(await codeApi.getCode(params.postId));
  };

  const handleSelectFile = async (path: string) => {
    setSelectedFile(path);
    const code = await codeApi.getGitHubCode(path);
    const language = path.split('.')[1];
    setCodeViewer({ code: code, language });
  };

  const handleStartReview = () => {
    setStartReview(!startReview);
  };

  const handleEndReview = () => {
    setEndReview(!endReview);
  };

  const handleStartInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartH(e.target.value);
  };

  const handleEndInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndH(e.target.value);
  };

  const handleViewPost = () => {
    setOpenPost(!openPost);
  };

  const onSubmitReview = () => {
    const review = {
      contents: markdownValue ? markdownValue : '',
      filePath: selectedFile,
      highlight: {
        highlightStart: parseInt(startH),
        highlightEnd: parseInt(endH),
      },
    };

    setReviews({
      reviews: [...reviews.reviews, review],
    });

    handleStartReview();
  };

  useEffect(() => {
    getDirectoryTree();
  }, []);

  return (
    <>
      <div className={'flex flex-col items-center my-4'}>
        <div className={'my-6 w-full'}>
          {openPost && (
            <PostModal postId={params.postId} close={handleViewPost} />
          )}
          {endReview && (
            <ReviewContents
              postId={params.postId}
              reviews={reviews}
              close={handleEndReview}
            />
          )}
        </div>
      </div>
      <div className={'flex h-screen w-full'}>
        <div className={'bg-coDark rounded-md w-[25%] h-screen p-4'}>
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
            <CodeViewer
              code={codeViewer.code}
              language={codeViewer.language}
              highlight={highlight}
            />
          </div>
        </div>
        <div
          className={`relative flex flex-col w-[35%] bg-coDark items-center p-2 gap-2`}
        >
          {reviews.reviews.length !== 0 ? (
            <>
              {reviews.reviews &&
                reviews.reviews.map((review, index) => (
                  <div
                    className={'border-2 w-full border-gray-500 rounded-md'}
                    key={index}
                  >
                    <MarkdownCard
                      contents={review.contents}
                      tags={review.tags}
                      highlight={review.highlight}
                      setHighlightFuc={setHighlight}
                    />
                  </div>
                ))}
            </>
          ) : (
            <div className={'text-white font-bold'}>아직 리뷰가 없어요!</div>
          )}
          <div className={'fixed right-20 bottom-10'} onClick={handleEndReview}>
            <Button content={'작성 완료'} size={'large'} />
          </div>
        </div>

        {!startReview && (
          <div
            className={'fixed left-1/2 bottom-10'}
            onClick={handleStartReview}
          >
            <Button content={'리뷰 추가'} size={'large'} />
          </div>
        )}
        {startReview && (
          <div
            className={
              'fixed w-1/2 bottom-4 left-0 right-0 mx-auto p-4 rounded-md bg-coDark'
            }
          >
            <div className={'flex mb-4 gap-20'}>
              <Input
                placeholder={'시작 라인'}
                onChange={handleStartInput}
                value={startH}
              />
              <Input
                placeholder={'끝 라인'}
                onChange={handleEndInput}
                value={endH}
              />
            </div>
            <MDEditor value={markdownValue} onChange={setMarkdownValue} />
            <div className={'flex my-2 gap-4 justify-end'}>
              <Button content={'취소'} onClick={handleStartReview} />
              <Button content={'저장'} onClick={onSubmitReview} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
