import { useState } from 'react';
import { DocsButton } from '@/components/buttons/DocsButton';
import { DocsExplorer } from '@/features/editor/DocsExplorer/DocsExplorer';

const EditorSideBar = () => {
  const [docsIsOpen, setDocsIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="pt-1 mb-1">
          <DocsButton handleClick={() => setDocsIsOpen(!docsIsOpen)} />
        </div>
      </div>
      {docsIsOpen && (
        <div className="w-2/5">
          <DocsExplorer />
        </div>
      )}
    </>
  );
};

export { EditorSideBar };
