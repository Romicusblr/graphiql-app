import { useGetSchemaQuery } from '@/app/services/graphql';

const Schema = () => {
  const { data } = useGetSchemaQuery(undefined);

  return (
    data && (
      <textarea
        name="docs"
        value={data}
        className="text-base h-5/6 w-full resize-none outline-none bg-gray-800 text-gray-400 p-4"
        readOnly
      />
    )
  );
};

export default Schema;
