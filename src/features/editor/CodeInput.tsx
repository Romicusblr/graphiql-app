import { useLocalization } from '@/hooks/localization';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { selectQuery, setQuery } from '@/features/editor/editorSlice';

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

  return <CodeMirror {...codeMirrorProps} />;
};

export { CodeInput };
