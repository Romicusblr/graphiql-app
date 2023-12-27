import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { useAppSelector } from '@/hooks/redux';
import { selectOutput } from '@/store/slices/appSlice';

const CodeOutput = () => {
  const output = useAppSelector(selectOutput);

  const codeMirrorProps: ReactCodeMirrorProps = {
    value: output,
    basicSetup: { lineNumbers: true },
    theme: 'none',
    readOnly: true,
  };

  return (
    <div className="resize-none rounded-xl outline-none text-base border-4 border-gray-600 bg-gray-600 text-gray-400 p-2 overflow-auto w-2/4">
      <CodeMirror {...codeMirrorProps} />
    </div>
  );
};

export { CodeOutput };
