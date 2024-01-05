import { useLocalization } from '@/context/LocalizationContext';

const ButtonSubmit = ({ name }: { name: string }) => {
  const { strings } = useLocalization();
  return (
    <button
      type="submit"
      className="flex w-full mt-3 justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-bold leading-6 text-gray-400 shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
    >
      {name === 'login' ? strings.loginTitle : strings.registerTitle}
    </button>
  );
};

export default ButtonSubmit;
