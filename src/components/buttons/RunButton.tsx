import { useLocalization } from '@/context/LocalizationContext';
import runSvg from '@/icons/run.svg';

interface RunButtonProps {
  handleClick: () => void; // Define the type for the handleClick function
}

const RunButton: React.FC<RunButtonProps> = ({ handleClick }) => {
  const { strings } = useLocalization();
  
  return (
    <button
      title={strings.runButton}
      className="bg-pink-500 rounded-lg w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-pink-600"
      onClick={handleClick}
    >
      <img src={runSvg} alt="run" className="w-4 h-4" />
    </button>
  );
};

export { RunButton };
