import { InputHTMLAttributes } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface PropsTypes<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  register: UseFormRegister<T>;
}

const InputForm = <T extends FieldValues>({
  type = 'text', // default type is text
  name,
  register,
  ...rest // rest of the input props
}: PropsTypes<T>) => {
  return (
    <input
      type={type}
      {...register(name)}
      {...rest} // spread the rest of the props here
      className={`block w-full rounded-md border-2 border-gray-400 p-1.5 text-gray-900 focus:outline-gray-700 sm:text-sm sm:leading-6 ${rest.className || ''}`}
    />
  );
};

export default InputForm;
