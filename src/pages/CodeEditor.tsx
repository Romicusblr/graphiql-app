import { CodeEntry } from '@/components/CodeEditor/CodeEntry';
import { CodeOutput } from '@/components/CodeEditor/CodeOutput';
import { DocsButton } from '@/components/buttons/DocsButton';
import { DropDownMenus } from '@/components/DropDownMenus';
import { VariableEditor } from '@/components/VariableEditor';
import { HistoryButton } from '@/components/buttons/HistoryButton';

const CodeEditor = () => {
  return (
    <div className="flex w-full flex-col grow absolute h-full p-2 bg-gray-600">
      <div className="flex w-full h-full">
        <div className="flex flex-col items-center">
          <div className="pt-1 mb-1">
            <DocsButton />
          </div>
          <div className="p-1">
            <HistoryButton />
          </div>
        </div>
        <div className="flex flex-col w-full h-full">
          <div className="flex w-full h-full">
            <CodeEntry />
            <CodeOutput />
          </div>
          <div className="h-2/4">
            <VariableEditor />
          </div>
        </div>
      </div>
      <div className="w-1/5">
        <DropDownMenus />
      </div>
    </div>
  );
};

export { CodeEditor };
