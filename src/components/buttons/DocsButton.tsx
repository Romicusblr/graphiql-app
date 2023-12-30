import docsSvg from '@/icons/docs.svg';
import {useAppDispatch, useAppSelector} from '@/hooks/redux';
import {selectDocsIsOpen, setDocsIsOpen} from '@/store/slices/dropDownMenusSlice';

const DocsButton = () => {
    const dispatch = useAppDispatch();
    const docsIsOpen = useAppSelector(selectDocsIsOpen);

    const handleClick = () => {
        console.log('click')
        dispatch(setDocsIsOpen(!docsIsOpen));
    }

  return (
    <div className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-lg hover:bg-gray-700" onClick={handleClick}>
      <img src={docsSvg} alt="docs" className="w-10 h-10" />
    </div>
  );
};

export { DocsButton };
