import { useLocalization } from '@/context/LocalizationContext';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import './CodeEditorStyles.css';
import { RunButton } from '@/components/buttons/RunButton';
import { ClearButton } from '@/components/buttons/ClearButton';
import { CopyButton } from '@/components/buttons/CopyButton';

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
    <div className="relative resize-none rounded-xl outline-none border-4 border-gray-600 bg-gray-800 text-gray-400 p-2 overflow-auto w-2/4">
      <div className="w-5/6">
        <CodeMirror {...codeMirrorProps} />
      </div>
      <div className="absolute top-3 right-3">
        <RunButton />
      </div>
      <div className="absolute top-16 right-3">
        <ClearButton />
      </div>
      <div className="absolute top-28 right-3">
        <CopyButton />
      </div>
    </div>
  );
};

export { CodeEntry };
