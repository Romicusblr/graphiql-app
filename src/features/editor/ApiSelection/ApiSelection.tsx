import { useLocalization } from '@/hooks/localization';
import { selectApiUrl, setApiUrl } from '@/features/editor/editorSlice';
import { useAppSelector, useAppDispatch } from '@/hooks/store';
import { ChangeEvent } from 'react';

const ApiSelection = () => {
  const { strings } = useLocalization();
  const apiUrl = useAppSelector(selectApiUrl);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setApiUrl(e.target.value));
  };

  return (
    <input
      type="text"
      defaultValue={apiUrl}
      onChange={handleInputChange}
      placeholder={strings.apiSelectionPlaceholder}
      className="w-full rounded-lg ml-1 outline-none p-2 caret-gray-400 bg-gray-800 text-gray-400 placeholder:text-gray-600"
    />
  );
};

export { ApiSelection };
