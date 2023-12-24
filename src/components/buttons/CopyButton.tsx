import copySvg from '../../icons/copy.svg';

const CopyButton = () => {
  return (
    <div className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-lg hover:bg-gray-700">
      <img src={copySvg} alt="copy" className="w-8 h-8" />
    </div>
  );
};

export { CopyButton };
