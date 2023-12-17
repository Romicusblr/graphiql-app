import { ObjectSchema, object, string } from 'yup';

interface Person {
  name: string;
  email: string;
  password: string;
}

const schema: ObjectSchema<Person> = object().shape({
  name: string().required(),
  email: string().email().required(),
  password: string().min(8).max(32).required(),
});

export default schema;
