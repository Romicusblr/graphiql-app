import { CodeEntry } from '@/components/CodeEditor/CodeEntry';
import { CodeOutput } from '@/components/CodeEditor/CodeOutput';
import { DocsButton } from '@/components/buttons/DocsButton';

const CodeEditor = () => {
  return (
    <div className="flex w-full grow absolute h-full p-2 bg-gray-600 rounded-lg">
      <div className="pt-1">
        <DocsButton />
      </div>
      <div className="flex w-full h-full">
        <CodeEntry />
        <CodeOutput />
      </div>
    </div>
  );
};

export { CodeEditor };
