import { useLocalization } from '@/context/LocalizationContext';

const ApiSelection = () => {
  const { strings } = useLocalization();

  return (
    <input
      type="text"
      placeholder={strings.apiSelectionPlaceholder}
      className="w-full rounded-xl outline-none p-3 mt-1 ml-2 caret-gray-400 bg-gray-800 text-gray-400 placeholder:text-gray-600"
    />
  );
};

export { ApiSelection };
