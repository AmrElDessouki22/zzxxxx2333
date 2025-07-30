'use client';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange }: InputProps) => {
  return (
    <input
      className="border border-gray-300 p-2 rounded"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
