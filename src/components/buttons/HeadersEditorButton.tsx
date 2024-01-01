import { useLocalization } from '@/context/LocalizationContext';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import {
  selectHeadersIsOpen,
  selectVariableIsOpen,
  setHeadersIsOpen,
  setVariableIsOpen,
} from '@/store/slices/dropDownMenusSlice';

const HeadersEditorButton = () => {
  const { strings } = useLocalization();
  const dispatch = useAppDispatch();
  const headersIsOpen = useAppSelector(selectHeadersIsOpen);
  const variableIsOpen = useAppSelector(selectVariableIsOpen);

  const handleClick = () => {
    dispatch(setVariableIsOpen(variableIsOpen && false));
    dispatch(setHeadersIsOpen(!headersIsOpen));
  };

  return (
    <div
      className="flex justify-center items-center w-2/4 h-10 cursor-pointer rounded-lg text-gray-400 hover:bg-gray-700"
      onClick={handleClick}
    >
      {strings.headersTitle}
    </div>
  );
};

export { HeadersEditorButton };
