import prettifySvg from '@/icons/prettify.svg';
import React from 'react';

interface PrettifyButtonProps {
  handleClick: () => void;
}

const PrettifyButton: React.FC<PrettifyButtonProps> = ({ handleClick }) => {
  return (
    <div
      className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-lg hover:bg-gray-700"
      onClick={handleClick}
    >
      <img src={prettifySvg} alt="prettify" className="w-10 h-10" />
    </div>
  );
};

export { PrettifyButton };
