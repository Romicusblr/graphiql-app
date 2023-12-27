import { CodeInput } from '@/components/CodeEditor/CodeInput';
import { CodeOutput } from '@/components/CodeEditor/CodeOutput';
import { DocsButton } from '@/components/buttons/DocsButton';
import { DropDownMenus } from '@/components/DropDownMenus';
import { VariableEditor } from '@/components/VariableEditor';
import { HistoryButton } from '@/components/buttons/HistoryButton';
import { ApiSelection } from '@/components/ApiSelection';
import { useAppSelector } from '@/hooks/redux';
import { HeadersEditor } from '@/components/HeadersEditor';
import {
  selectHeadersIsOpen,
  selectVariableIsOpen,
} from '@/store/slices/dropDownMenusSlice';

const CodeEditor = () => {
  const variableIsOpen = useAppSelector(selectVariableIsOpen);
  const headersIsOpen = useAppSelector(selectHeadersIsOpen);

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
            <CodeInput />
            <CodeOutput />
          </div>
          {variableIsOpen && (
            <div className="h-2/4">
              <VariableEditor />
            </div>
          )}
          {headersIsOpen && (
            <div className="h-2/4">
              <HeadersEditor />
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-1/5">
          <DropDownMenus />
        </div>
        <div>
          <ApiSelection />
        </div>
      </div>
    </div>
  );
};

export { CodeEditor };
