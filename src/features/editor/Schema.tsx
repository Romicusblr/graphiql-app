import { useGetSchemaQuery } from '@/app/services/graphql';
import { buildClientSchema, printSchema } from 'graphql/index';

const Schema = () => {
  const { data } = useGetSchemaQuery(undefined);
  let printedSchema;

  if (data) {
    const result = data.data;
    const schema = buildClientSchema(result);
    printedSchema = printSchema(schema);
  }

  return (
    <textarea
      name="docs"
      value={printedSchema}
      className="text-base h-5/6 w-full resize-none outline-none bg-gray-800 text-gray-400 p-4"
      readOnly
    />
  );
};

export default Schema;
