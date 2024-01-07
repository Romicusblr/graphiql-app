import docsSvg from '@/icons/docs.svg';
import React from 'react';
import { IButtonProps } from '@/types';

const DocsButton: React.FC<IButtonProps> = ({ handleClick }) => {
  return (
    <button
      className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-lg hover:bg-gray-700"
      onClick={handleClick}
    >
      <img src={docsSvg} alt="docs" className="w-10 h-10" />
    </button>
  );
};

export { DocsButton };
