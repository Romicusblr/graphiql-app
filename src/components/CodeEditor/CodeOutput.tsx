import CodeMirror from '@uiw/react-codemirror';
import { CustomCodeMirrorProps } from '@/types';

const CodeOutput = () => {
  const codeMirrorProps: CustomCodeMirrorProps = {
    value: '',
    options: { lineNumbers: true },
    theme: 'none',
    readOnly: true,
  };

  return (
    <div className="resize-none rounded-xl outline-none text-base border-4 border-gray-600 bg-gray-800 text-gray-400 p-2 overflow-auto w-2/4">
      <CodeMirror {...codeMirrorProps} />
    </div>
  );
};

export { CodeOutput };
