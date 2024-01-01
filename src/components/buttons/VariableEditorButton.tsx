import { useLocalization } from '@/hooks/localization';
import { IButtonProps } from '@/types';

const VariableEditorButton: React.FC<IButtonProps> = ({ handleClick }) => {
  const { strings } = useLocalization();

  return (
    <div
      className="flex justify-center items-center w-2/4 h-10 cursor-pointer rounded-lg text-gray-400 hover:bg-gray-700"
      onClick={handleClick}
    >
      {strings.variableTitle}
    </div>
  );
};

export { VariableEditorButton };
