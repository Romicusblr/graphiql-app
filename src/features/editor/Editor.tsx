import { useAppSelector } from '@/hooks/store';
import {
  selectApiUrl,
  selectHeaders,
  selectQuery,
  selectVariables,
  setQuery,
} from '@/features/editor/editorSlice';
import { prettifyGraphql } from '@/utils/prettyfier';
import { useState } from 'react';
import { useLazyGqlQuery } from '@/app/services/graphql';
import { useDispatch } from 'react-redux';
import { DocsExplorer } from '@/components/DocsExplorer';
import { DocsButton } from '@/components/buttons/DocsButton';
import { CodeInput } from '@/components/CodeEditor/CodeInput';
import { RunButton } from '@/components/buttons/RunButton';
import { PrettifyButton } from '@/components/buttons/PrettifyButton';
import { ClearButton } from '@/components/buttons/ClearButton';
import { CodeOutput } from '@/components/CodeEditor/CodeOutput';
import { VariableEditor } from '@/features/editor/VariableEditor';
import { HeadersEditor } from '@/features/editor/HeadersEditor';
import { VariableEditorButton } from '@/components/buttons/VariableEditorButton';
import { HeadersEditorButton } from '@/components/buttons/HeadersEditorButton';
import { ApiSelection } from '@/features/editor/ApiSelection';

const CodeEditor = () => {
  const dispatch = useDispatch();
  const [variableIsOpen, setVariableIsOpen] = useState(false);
  const [headersIsOpen, setHeadersIsOpen] = useState(false);
  const [docsIsOpen, setDocsIsOpen] = useState(false);
  const apiUrl = useAppSelector(selectApiUrl);
  const query = useAppSelector(selectQuery);
  const headers = useAppSelector(selectHeaders);
  const variables = useAppSelector(selectVariables);
  const [trigger] = useLazyGqlQuery();

  const runQuery = async () => {
    if (!query.trim() || !apiUrl.trim()) {
      return;
    }

    await trigger({ query, headers, variables });
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

  const openDocs = () => {
    setDocsIsOpen(!docsIsOpen);
  };

  return (
    <div className="flex w-full flex-col grow absolute h-full p-2 bg-gray-600">
      <div className="flex w-full h-full">
        <div className="flex flex-col items-center">
          <div className="pt-1 mb-1">
            <DocsButton handleClick={openDocs} />
          </div>
        </div>
        {docsIsOpen && (
          <div className="w-2/5">
            <DocsExplorer />
          </div>
        )}
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
