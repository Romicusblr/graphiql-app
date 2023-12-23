import { CodeEntry } from '@/components/CodeEditor/CodeEntry';
import { CodeOutput } from '@/components/CodeEditor/CodeOutput';

const CodeEditor = () => {
  return (
    <div className="flex w-full grow absolute h-full p-2 bg-gray-600 rounded-lg">
      <CodeEntry />
      <CodeOutput />
    </div>
  );
};

export { CodeEditor };
