import { CodeEntry } from '@/components/GraphiQL/CodeEntry';
import { CodeOutput } from '@/components/GraphiQL/CodeOutput';

const CodeEditor = () => {
  return (
    <div className="flex w-full grow absolute h-full p-2 bg-gray-600 rounded-lg">
      <CodeEntry />
      <CodeOutput />
    </div>
  );
};

export { CodeEditor };
