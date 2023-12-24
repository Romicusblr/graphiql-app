import { useLocalization } from '@/context/LocalizationContext';
import { useAppDispatch } from '@/hooks/redux';
import { setIsOpen } from '@/store/slices/dropDownMenusSlice';

const VariableEditorButton = () => {
  const { strings } = useLocalization();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setIsOpen(true));
  };

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
