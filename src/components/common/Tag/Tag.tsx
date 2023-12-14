export interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return (
    <div
      className={
        'rounded-full text-sm px-4 py-1 flex gap-2 bg-coDark text-white border border-coWhite'
      }
    >
      <span>{text}</span>
    </div>
  );
};

export default Tag;
