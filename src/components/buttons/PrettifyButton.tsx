import { useLocalization } from '@/context/LocalizationContext';
import prettifySvg from '@/icons/prettify.svg';
import React from 'react';

interface PrettifyButtonProps {
  handleClick: () => void;
}

const PrettifyButton: React.FC<PrettifyButtonProps> = ({ handleClick }) => {
  const { strings } = useLocalization();

  return (
    <button
      title={strings.prettifyButton}
      className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-lg hover:bg-gray-700"
      onClick={handleClick}
    >
      <img src={prettifySvg} alt="prettify" className="w-10 h-10" />
    </button>
  );
};

export { PrettifyButton };
