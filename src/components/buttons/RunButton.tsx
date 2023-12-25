import runSvg from '@/icons/run.svg';

const RunButton = () => {
  return (
    <div className="bg-pink-500 rounded-lg w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-pink-600">
      <img src={runSvg} alt="run" className="w-4 h-4" />
    </div>
  );
};

export { RunButton };
