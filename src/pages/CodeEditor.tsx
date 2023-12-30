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
import { RunButton } from '@/components/buttons/RunButton';
import { ClearButton } from '@/components/buttons/ClearButton';
import { CopyButton } from '@/components/buttons/CopyButton';
import {selectApiUrl, selectHeaders, selectQuery, setOutput} from '@/store/slices/appSlice';
import { useDispatch } from 'react-redux';
import { prettifyJson } from '@/utils/prettyfier';
import {PrettifyButton} from '@/components/buttons/PrettifyButton';
import {DocsExplorer} from '@/components/DocsExplorer';

const CodeEditor = () => {
  const dispatch = useDispatch();
  const variableIsOpen = useAppSelector(selectVariableIsOpen);
  const headersIsOpen = useAppSelector(selectHeadersIsOpen);
  const apiUrl = useAppSelector(selectApiUrl);
  const query = useAppSelector(selectQuery);
  const headers = useAppSelector(selectHeaders);

  const runQuery = async () => {
    if (!query || !apiUrl) {
      return;
    }

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({ query }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        },
      });
      const data = await res.json();
      const output = await prettifyJson(JSON.stringify(data));
      dispatch(setOutput(output));
    } catch (error) {
      const output = await prettifyJson(JSON.stringify(error));
      dispatch(setOutput(output));
    }
  };

  const prettify = () => {
    console.log('prettify')
  }

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
        <div>
          <DocsExplorer />
        </div>
        <div className="flex flex-col w-full h-full">
          <div className="flex w-full h-full">
            <div className="relative resize-none rounded-xl outline-none border-4 border-gray-600 bg-gray-800 text-gray-400 p-2 overflow-auto w-2/4">
              <div className="w-5/6 text-base">
                <CodeInput />
              </div>
              <div className="absolute top-3 right-3">
                <RunButton handleClick={runQuery} />
              </div>
              <div className="absolute top-16 right-3">
                <PrettifyButton handleClick={prettify} />
              </div>
              <div className="absolute top-28 right-3">
                <ClearButton />
              </div>
              <div className="absolute top-40 right-3">
                <CopyButton />
              </div>
            </div>
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
