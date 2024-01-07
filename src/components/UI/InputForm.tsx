import { InputHTMLAttributes } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface PropsTypes<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  register: UseFormRegister<T>;
}

const InputForm = <T extends FieldValues>({
  type = 'text',
  name,
  register,
  ...rest
}: PropsTypes<T>) => {
  return (
    <input
      type={type}
      {...register(name)}
      {...rest}
      className={`block w-full rounded-md bg-gray-400 border-2 border-gray-400 p-1.5 text-gray-800 focus:outline-gray-800 sm:text-sm sm:leading-6 ${
        rest.className || ''
      }`}
    />
  );
};

export default InputForm;
