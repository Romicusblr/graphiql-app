import { LocalizationContextProps } from '@/types';
import enStrings from '@/locales/en';
import ruStrings from '@/locales/ru';
import { useLocalization } from '@/context/LocalizationContext';
import CodeMirror from '@uiw/react-codemirror';

const CodeEntry = () => {
  const { language } = useLocalization() as LocalizationContextProps;
  const strings = language === 'en' ? enStrings : ruStrings;

  return (
    <div className="resize-none rounded-xl outline-none border-4 border-gray-600 bg-gray-800 text-gray-400 p-2 overflow-auto w-2/4">
      <CodeMirror
        value={strings.codeMirrorPlaceholder}
        options={{ lineNumbers: true }}
      />
    </div>
  );
};

export { CodeEntry };
