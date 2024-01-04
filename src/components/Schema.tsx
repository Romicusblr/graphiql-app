import { useEffect } from 'react';
import { getSchema } from '@/utils/getSchema';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import {
  selectApiUrl,
  selectHeaders,
  selectSchema,
} from '@/store/slices/appSlice';

const Schema = () => {
  const apiUrl = useAppSelector(selectApiUrl);
  const headers = useAppSelector(selectHeaders);
  const dispatch = useAppDispatch();
  const schema = useAppSelector(selectSchema);

  useEffect(() => {
    getSchema(apiUrl, headers, dispatch);
  });

  return (
    <>
      <textarea
        name="docs"
        value={schema}
        className="text-base h-5/6 w-full resize-none outline-none bg-gray-800 text-gray-400 p-4"
        readOnly
      />
    </>
  );
};

export default Schema;
