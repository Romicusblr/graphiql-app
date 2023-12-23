import { useLocalization } from '@/context/LocalizationContext';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import './CodeEditorStyles.css';

interface CustomCodeMirrorProps extends ReactCodeMirrorProps {
  value: string;
  options: {
    lineNumbers: boolean;
  };
  theme: 'none' | 'light' | 'dark';
}

const CodeEntry = () => {
  const { strings } = useLocalization();
  const codeMirrorProps: CustomCodeMirrorProps = {
    value: strings.codeMirrorPlaceholder,
    options: { lineNumbers: true },
    theme: 'none',
  };

  return (
    <div className="resize-none rounded-xl outline-none border-4 border-gray-600 bg-gray-800 text-gray-400 p-2 overflow-auto w-2/4">
      <CodeMirror {...codeMirrorProps} />
    </div>
  );
};

export { CodeEntry };
