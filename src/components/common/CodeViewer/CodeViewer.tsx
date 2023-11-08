import { CSSProperties } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { highlightType } from '@utils/types/common.type';

export interface CodeViewerProps {
  code: string;
  language: string;
  highlight?: highlightType;
}

const CodeViewer = ({ code, language, highlight }: CodeViewerProps) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      showLineNumbers={true}
      wrapLines={true}
      lineProps={(lineNumber) => {
        if (!highlight?.highlightStart || !highlight.highlightEnd)
          return { undefined };

        const style: CSSProperties = { display: 'block' };

        if (
          lineNumber >= highlight.highlightStart &&
          lineNumber <= highlight.highlightEnd
        ) {
          return {
            style: {
              ...style,
              backgroundColor: '#000000',
              opacity: 1,
            },
          };
        }

        style.opacity = 0.2;
        return { style };
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeViewer;
