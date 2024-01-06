import { useLocalization } from '@/hooks/localization';
import { IButtonProps } from '@/types';

const HeadersEditorButton: React.FC<IButtonProps> = ({ handleClick }) => {
  const { strings } = useLocalization();

  return (
    <div
      className="flex justify-center items-center cursor-pointer rounded-lg text-gray-400 hover:bg-gray-700 bg-gray-800 w-40 p-2"
      onClick={handleClick}
    >
      {strings.headersTitle}
    </div>
  );
};

export { HeadersEditorButton };
