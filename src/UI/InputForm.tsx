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
      className="input-text"
      id={name}
      {...register(name)}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputForm;
