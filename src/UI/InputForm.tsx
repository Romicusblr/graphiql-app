import React, { FC } from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types/form';

interface PropsTypes {
  name: 'name' | 'email' | 'password';
  type: string;
  value: string;
  register: UseFormRegister<{ email: string; password: string; name: string }>;
  onChange: (value: React.SetStateAction<string>) => void;
}

const InputForm: FC<PropsTypes> = ({
  type,
  value,
  register,
  name,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={name}
      {...register(name)}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="block w-full rounded-md border-2 border-gray-400 p-1.5 text-gray-900 focus:outline-gray-700 sm:text-sm sm:leading-6 "
    />
  );
};

export default InputForm;

//placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
