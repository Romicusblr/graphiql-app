import { useLocalization } from '@/context/LocalizationContext';

const VariableEditorButton = () => {
  const { strings } = useLocalization();

  return (
    <div className="flex justify-center items-center w-2/4 h-10 cursor-pointer rounded-lg text-gray-400 hover:bg-gray-700">
      {strings.variableTitle}
    </div>
  );
};

export { VariableEditorButton };
