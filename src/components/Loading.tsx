import {useLocalization} from '@/context/LocalizationContext';

const Loading = () => {
  const { strings } = useLocalization();

  return <div className="text-xl text-gray-400">{`${strings.loadingTitle}...`}</div>;
};

export default Loading;
