import runSvg from '@/icons/run.svg';
import { useAppSelector} from '@/hooks/redux';
import {selectQuery} from '@/store/slices/appSlice';

const RunButton = () => {
    const query = useAppSelector(selectQuery)

    const handleClick = () => {
        console.log(query)
    }

  return (
    <div className="bg-pink-500 rounded-lg w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-pink-600" onClick={handleClick}>
      <img src={runSvg} alt="run" className="w-4 h-4" />
    </div>
  );
};

export { RunButton };
