import clearSvg from '../../icons/clear.svg';

const ClearButton = () => {
  return (
    <div className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-lg hover:bg-gray-700">
      <img src={clearSvg} alt="clear" className="w-10 h-10" />
    </div>
  );
};

export { ClearButton };
