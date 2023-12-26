import { useLocalization } from '@/context/LocalizationContext';
import { selectApiUrl, setApiUrl } from '@/store/slices/appSlice';
import { useAppSelector } from '@/hooks/redux';
import { useDispatch } from 'react-redux';
import { ChangeEvent } from 'react';

const ApiSelection = () => {
  const { strings } = useLocalization();
  const apiUrl = useAppSelector(selectApiUrl);
  const dispatch = useDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setApiUrl(e.target.value));
  };

  return (
    <input
      type="text"
      defaultValue={apiUrl}
      onChange={handleInputChange}
      placeholder={strings.apiSelectionPlaceholder}
      className="w-full rounded-xl outline-none p-3 mt-1 ml-2 caret-gray-400 bg-gray-800 text-gray-400 placeholder:text-gray-600"
    />
  );
};

export { ApiSelection };
