import MDEditor from '@uiw/react-md-editor';
import React, { useState } from 'react';

import Button from '@components/common/Button/Button';

const MarkdownEditor = () => {
  const [value, setValue] = useState<string>('');

  const handleEditorChange = (newValue?: string) => {
    setValue(newValue || '');
  };

  return (
    <div className="container bg-coWhite p-4 rounded-md">
      <MDEditor value={value} onChange={handleEditorChange} />

      <div className={'w-full flex justify-end gap-4 mt-4'}>
        <Button content={'취소'} />
        <Button content={'저장'} />
      </div>
    </div>
  );
};

export default MarkdownEditor;
