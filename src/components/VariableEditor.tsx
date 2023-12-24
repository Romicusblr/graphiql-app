import CodeMirror from '@uiw/react-codemirror';
import { CustomCodeMirrorProps } from '@/types';

const VariableEditor = () => {
  const CodeMirrorProps: CustomCodeMirrorProps = {
    value: '',
    options: { lineNumbers: true },
    theme: 'none',
  };

  return (
    <div className="relative resize-none rounded-xl outline-none border-4 border-gray-600 bg-gray-800 text-gray-400 p-2 overflow-auto w-2/6 h-full">
      <CodeMirror {...CodeMirrorProps} />
    </div>
  );
};

export { VariableEditor };
