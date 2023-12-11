import { useLocale } from '@/context/LocalizationContext';
import { regions } from '@/context/constants';

const LanguageToggle = () => {
  const { dispatch } = useLocale();

  const handleRegionChange = (region) => {
    const action = {
      type: 'changeLocale',
      payload: {
        region,
      },
    };

    dispatch(action);
  };

  return (
    <>
      {Object.keys(regions).map((region) => {
        <button key={region} onClick={() => handleRegionChange(region)}>
          {region}
        </button>;
      })}
    </>
  );
};

export default LanguageToggle;
