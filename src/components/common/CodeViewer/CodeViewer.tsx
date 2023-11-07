import { CSSProperties } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export interface CodeViewerProps {
  code: string;
  language: string;
  highlight?: highlightProps;
}

export interface highlightProps {
  highlightStart?: number;
  highlightEnd?: number;
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
          return { style };
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
