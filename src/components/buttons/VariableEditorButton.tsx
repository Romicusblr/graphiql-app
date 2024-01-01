import { useLocalization } from '@/context/LocalizationContext';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import {
  selectHeadersIsOpen,
  selectVariableIsOpen,
  setHeadersIsOpen,
  setVariableIsOpen,
} from '@/store/slices/dropDownMenusSlice';

const VariableEditorButton = () => {
  const { strings } = useLocalization();
  const dispatch = useAppDispatch();
  const variableIsOpen = useAppSelector(selectVariableIsOpen);
  const headersIsOpen = useAppSelector(selectHeadersIsOpen);

  const handleClick = () => {
    dispatch(setHeadersIsOpen(headersIsOpen && false));
    dispatch(setVariableIsOpen(!variableIsOpen));
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
