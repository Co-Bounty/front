type size = 'small' | 'medium' | 'large';

interface ButtonProps {
  content: string;
  onClick?: () => void;
  size?: size;
}

const Button = ({ content, onClick, size = 'medium' }: ButtonProps) => {
  return (
    <button
      className={`bg-coWhite text-white rounded-md font-bold hover:bg-slate-400
        ${(() => {
          switch (size) {
            case 'small':
              return 'text-sm px-4 py-2';
            case 'medium':
              return 'text-md px-4 py-2';
            case 'large':
              return 'text-xl px-6 py-4';
          }
        })()}
      `}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
