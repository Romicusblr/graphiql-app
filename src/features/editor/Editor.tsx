import { CodeInput } from '@/components/CodeEditor/CodeInput';
import { CodeOutput } from '@/components/CodeEditor/CodeOutput';
import { DocsButton } from '@/components/buttons/DocsButton';
import { VariableEditor } from '@/features/editor/VariableEditor';
import { HistoryButton } from '@/components/buttons/HistoryButton';
import { ApiSelection } from '@/features/editor/ApiSelection';
import { useAppSelector } from '@/hooks/store';
import { HeadersEditor } from '@/features/editor/HeadersEditor';
import { RunButton } from '@/components/buttons/RunButton';
import { ClearButton } from '@/components/buttons/ClearButton';
import {
  selectApiUrl,
  selectHeaders,
  selectQuery,
  setOutput,
  setQuery,
} from '@/features/editor/editorSlice';
import { useDispatch } from 'react-redux';
import { prettifyGraphql, prettifyJson } from '@/utils/prettyfier';
import { PrettifyButton } from '@/components/buttons/PrettifyButton';
import { useState } from 'react';
import { VariableEditorButton } from '@/components/buttons/VariableEditorButton';
import { HeadersEditorButton } from '@/components/buttons/HeadersEditorButton';

const CodeEditor = () => {
  const dispatch = useDispatch();
  const [variableIsOpen, setVariableIsOpen] = useState(false);
  const [headersIsOpen, setHeadersIsOpen] = useState(false);
  const apiUrl = useAppSelector(selectApiUrl);
  const query = useAppSelector(selectQuery);
  const headers = useAppSelector(selectHeaders);

  const runQuery = async () => {
    if (!query.trim() || !apiUrl.trim()) {
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

  const prettifyQuery = async () => {
    if (!query.trim()) {
      return;
    }
    const prettified = await prettifyGraphql(query);
    dispatch(setQuery(prettified));
  };

  const clearQuery = async () => {
    dispatch(setQuery(''));
  };

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
            <div className="relative resize-none rounded-xl outline-none border-4 border-gray-600 bg-gray-800 text-gray-400 p-2 overflow-auto w-2/4">
              <div className="w-5/6 text-base">
                <CodeInput />
              </div>
              <div className="absolute top-3 right-3">
                <RunButton handleClick={runQuery} />
              </div>
              <div className="absolute top-16 right-3">
                <PrettifyButton handleClick={prettifyQuery} />
              </div>
              <div className="absolute top-28 right-3">
                <ClearButton handleClick={clearQuery} />
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
          <div className="flex rounded-xl ml-14 mt-1 p-1 bg-gray-800">
            <VariableEditorButton
              handleClick={openVariablesOrHeaders('variables')}
            />
            <HeadersEditorButton
              handleClick={openVariablesOrHeaders('headers')}
            />
          </div>
        </div>
        <div>
          <ApiSelection />
        </div>
      </div>
    </div>
  );
};

export { CodeEditor };