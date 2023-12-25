import { FC } from 'react';

interface PropsTypes {
  children: string;
  htmlFor: string;
}

const LabelForm: FC<PropsTypes> = ({ children, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-bold text-gray-700 cursor-pointer"
    >
      {children}
    </label>
  );
};

export default LabelForm;
