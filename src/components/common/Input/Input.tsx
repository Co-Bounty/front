import { ChangeEvent } from 'react';

interface InputProps {
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  style?: string;
}

const Input = ({
  onChange,
  type = 'text',
  value,
  placeholder,
  style,
}: InputProps) => {
  return (
    <input
      className={`bg-coDark text-white focus:outline-none text-md rounded-lg block w-full p-2.5  
        ${style && style}`}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      autoComplete={'off'}
    />
  );
};

export default Input;
