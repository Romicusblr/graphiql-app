import { useLocalization } from '@/context/LocalizationContext';
import { Language, LocalizationContextProps } from '@/types';

const LanguageToggle = () => {
  const { language, setLanguage } =
    useLocalization() as LocalizationContextProps;

  return (
    <select
      name="language"
      value={language}
      className="bg-gray-800 border-2 border-gray-400 rounded-lg cursor-pointer outline-none"
      onChange={(e) => setLanguage(e.target.value as Language)}
    >
      <option value="en">en</option>
      <option value="ru">ru</option>
    </select>
  );
};

export default LanguageToggle;
