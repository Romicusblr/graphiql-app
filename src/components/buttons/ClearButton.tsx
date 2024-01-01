import { useLocalization } from '@/hooks/localization';
import clearSvg from '@/icons/clear.svg';
import { IButtonProps } from '@/types';

const ClearButton: React.FC<IButtonProps> = ({ handleClick }) => {
  const { strings } = useLocalization();
  
  return (
    <button
    title={strings.clearButton}
    onClick={handleClick}
      className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-lg hover:bg-gray-700"
    >
      <img src={clearSvg} alt="clear" className="w-10 h-10" />
    </button>
  );
};

export { ClearButton };
