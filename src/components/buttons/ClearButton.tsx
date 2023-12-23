import clearSvg from '../../icons/clear.svg';

const ClearButton = () => {
  return (
    <div className="w-10 h-10 flex justify-center items-center">
      <img src={clearSvg} alt="clear" className="w-10 h-10" />
    </div>
  );
};

export { ClearButton };
