import { CSSProperties } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { highlightType } from '@utils/types/common.type';

export interface CodeViewerProps {
  code: string;
  language: string;
  highlight?: highlightType;
}

const CodeViewer = ({ code, language, highlight }: CodeViewerProps) => {
  return (
    <SyntaxHighlighter
      customStyle={{
        margin: 0,
        borderRadius: 0,
        height: '100%',
        fontSize: '1rem',
      }}
      language={language}
      style={vscDarkPlus}
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
              backgroundColor: 'rgba(255,255,255,0.1)',
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
