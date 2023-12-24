import { CodeEntry } from '@/components/CodeEditor/CodeEntry';
import { CodeOutput } from '@/components/CodeEditor/CodeOutput';
import { DocsButton } from '@/components/buttons/DocsButton';
import { DropDownMenus } from '@/components/DropDownMenus';

const CodeEditor = () => {
  return (
    <div className="flex w-full flex-col grow absolute h-full p-2 bg-gray-600">
      <div className="flex w-full h-full">
        <div className="pt-1">
          <DocsButton />
        </div>
        <div className="flex w-full h-full">
          <CodeEntry />
          <CodeOutput />
        </div>
      </div>
      <div className="w-1/5">
        <DropDownMenus />
      </div>
    </div>
  );
};

export { CodeEditor };
