import { useState } from 'react';
import { VariableEditor } from '@/features/editor/VariableEditor';
import { HeadersEditor } from '@/features/editor/HeadersEditor';
import { VariableEditorButton } from '@/components/buttons/VariableEditorButton';
import { HeadersEditorButton } from '@/components/buttons/HeadersEditorButton';
import { ApiSelection } from '@/features/editor/ApiSelection';

const EditorBottomBar = () => {
  const [variableIsOpen, setVariableIsOpen] = useState(false);
  const [headersIsOpen, setHeadersIsOpen] = useState(false);

  const openVariablesOrHeaders = (type: 'variables' | 'headers') => () => {
    if (type === 'variables') {
      setVariableIsOpen(!variableIsOpen);
      setHeadersIsOpen(false);
    } else if (type === 'headers') {
      setHeadersIsOpen(!headersIsOpen);
      setVariableIsOpen(false);
    }
  };

  return (
    <>
      {variableIsOpen && <VariableEditor />}
      {headersIsOpen && <HeadersEditor />}
      <div className="flex items-center">
        <div className="flex justify-between w-1/2 p-1">
          <VariableEditorButton
            handleClick={openVariablesOrHeaders('variables')}
          />
          <HeadersEditorButton
            handleClick={openVariablesOrHeaders('headers')}
          />
        </div>
        <div className="flex justify-start w-1/2">
          <ApiSelection />
        </div>
      </div>
    </>
  );
};

export { EditorBottomBar };
