export interface TagProps {
  emoji: string;
  text: string;
}

const Tag = ({ emoji, text }: TagProps) => {
  return (
    <div className={`rounded-full px-4 py-1 flex gap-2 border-2`}>
      <span>{emoji}</span>
      <span>{text}</span>
    </div>
  );
};

export default Tag;
