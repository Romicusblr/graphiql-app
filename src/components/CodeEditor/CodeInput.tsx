import { useLocalization } from '@/context/LocalizationContext';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import './CodeEditorStyles.css';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectQuery, setQuery } from '@/store/slices/appSlice';

const CodeInput = () => {
  const { strings } = useLocalization();
  const dispatch = useAppDispatch();
  const query = useAppSelector(selectQuery);

  const handleChange = (newValue: string) => {
    dispatch(setQuery(newValue));
  };

  const codeMirrorProps: ReactCodeMirrorProps = {
    placeholder: strings.codeMirrorPlaceholder,
    value: query,
    basicSetup: { lineNumbers: true },
    theme: 'none',
    onChange: handleChange,
  };

  return (
    <div className="w-5/6 text-base">
      <CodeMirror {...codeMirrorProps} />
    </div>
  );
};

export { CodeInput };
