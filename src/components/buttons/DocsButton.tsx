import docsSvg from '../../icons/docs.svg';

const DocsButton = () => {
  return (
    <div className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-lg hover:bg-gray-700">
      <img src={docsSvg} alt="docs" className="w-10 h-10" />
    </div>
  );
};

export { DocsButton };
