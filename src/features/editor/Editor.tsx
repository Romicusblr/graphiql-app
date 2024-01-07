import './styles.css';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/hooks/store';
import {
  selectApiUrl,
  selectHeaders,
  selectQuery,
  selectVariables,
  setQuery,
} from '@/features/editor/editorSlice';
import { useLazyGqlQuery } from '@/app/services/graphql';
import { prettifyGraphql } from '@/utils/prettyfier';
import { CodeInput } from '@/features/editor/CodeMirror/CodeInput';
import { RunButton } from '@/components/buttons/RunButton';
import { PrettifyButton } from '@/components/buttons/PrettifyButton';
import { ClearButton } from '@/components/buttons/ClearButton';
import { CodeOutput } from '@/features/editor/CodeMirror/CodeOutput';
import { EditorSideBar } from './EditorSideBar';
import { EditorBottomBar } from './EditorBottomBar';

const CodeEditor = () => {
  const dispatch = useDispatch();
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

  return (
    <div className="flex w-full flex-col grow absolute h-full p-2 bg-gray-600">
      <div className="flex w-full h-full">
        <EditorSideBar />
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
          <EditorBottomBar />
        </div>
      </div>
    </div>
  );
};

export { CodeEditor };
