import {useAppDispatch, useAppSelector} from '@/hooks/redux';
import {selectApiUrl, selectHeaders, selectSchema, setSchema} from '@/store/slices/appSlice';
import { buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql';
import { useLocalization } from '@/context/LocalizationContext';

const DocsExplorer = () => {
  const { strings } = useLocalization();
  const apiUrl = useAppSelector(selectApiUrl);
  const headers = useAppSelector(selectHeaders);
  const schema = useAppSelector(selectSchema);
  const dispatch = useAppDispatch();

  const getSchema = async () => {
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({
          query: getIntrospectionQuery(),
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        },
      });
      const result = await res.json();
      const data = result.data;

      const schema = buildClientSchema(data);

      const printedSchema = printSchema(schema);
      console.log(printedSchema);
      dispatch(setSchema(printedSchema));
    } catch (e) {
      console.error(`error : ${e}`);
    }
  };

  return (
    <div
      className="rounded-xl h-full border-4 border-gray-600 bg-gray-800"
      onClick={getSchema}
    >
      <p className="text-lg text-gray-400 pt-2 pl-3 pb-1 mb-2">
        {strings.docsTitle}
      </p>
      {schema &&
          <textarea
              name="docs"
              className="text-base h-5/6 resize-none outline-none bg-gray-800 text-gray-400 p-4"
              readOnly
          >{schema}</textarea>
      }
    </div>
  );
};

export { DocsExplorer };
