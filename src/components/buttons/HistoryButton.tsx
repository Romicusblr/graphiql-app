import historySvg from '@/icons/history.svg';

const HistoryButton = () => {
  return (
    <div className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-lg hover:bg-gray-700">
      <img src={historySvg} alt="history" className="w-9 h-9" />
    </div>
  );
};

export { HistoryButton };
