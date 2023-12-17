import { FC } from 'react';

interface PropsTypes {
  children: string;
  htmlFor: string;
}

const LabelForm: FC<PropsTypes> = ({ children, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {children}
    </label>
  );
};

export default LabelForm;
