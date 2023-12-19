import { useLocalization } from '@/context/LocalizationContext';
import CodeMirror from '@uiw/react-codemirror';

const CodeEntry = () => {
  const { strings } = useLocalization();

  return (
    <div className="resize-none rounded-xl outline-none border-4 border-gray-600 bg-gray-800 text-gray-400 p-2 overflow-auto w-2/4">
      <CodeMirror
        value={strings.codeMirrorPlaceholder}
        options={{ lineNumbers: true }}
        theme={'none'}
      />
    </div>
  );
};

export { CodeEntry };
