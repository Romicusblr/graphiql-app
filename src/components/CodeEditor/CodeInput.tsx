import { useLocalization } from '@/context/LocalizationContext';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import './CodeEditorStyles.css';
import { useAppDispatch } from '@/hooks/redux';
import { setQuery } from '@/store/slices/appSlice';

const CodeInput = () => {
  const { strings } = useLocalization();
  const dispatch = useAppDispatch();

  const handleChange = (newValue: string) => {
    dispatch(setQuery(newValue));
  };

  const codeMirrorProps: ReactCodeMirrorProps = {
    placeholder: strings.codeMirrorPlaceholder,
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
