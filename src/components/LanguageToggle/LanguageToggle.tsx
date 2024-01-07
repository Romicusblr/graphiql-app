import { useLocalization } from '@/hooks/localization';
import { Language, REGIONS } from '@/locales/constants';

const LanguageToggle = () => {
  const { language, setLanguage } = useLocalization();

  return (
    <select
      name="language"
      value={language}
      className="bg-gray-800 border-2 border-gray-400 rounded-lg cursor-pointer outline-none"
      onChange={(e) => setLanguage(e.target.value as Language)}
    >
      {Object.keys(REGIONS).map((region) => (
        <option key={region} value={region}>
          {region.toLowerCase()}
        </option>
      ))}
    </select>
  );
};

export default LanguageToggle;
