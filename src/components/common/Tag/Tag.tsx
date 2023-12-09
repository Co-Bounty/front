'use client';

export interface TagProps {
  emoji: string;
  text: string;
}

const Tag = ({ emoji, text }: TagProps) => {
  return (
    <div
      className={
        'rounded-full px-4 py-1 flex gap-2 bg-coDark text-white border border-coWhite'
      }
    >
      <span>{emoji}</span>
      <span>{text}</span>
    </div>
  );
};

export default Tag;
