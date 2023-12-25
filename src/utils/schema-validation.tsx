import { ObjectSchema, object, string } from 'yup';

interface Person {
  name: string;
  email: string;
  password: string;
}

const schema: ObjectSchema<Person> = object().shape({
  name: string().required('Required field'),
  email: string()
    .email('Email must be a valid email')
    .required('Required field')
    .min(8, 'Email must be at least 8 characters')
    .max(32, 'Email must be at most 32 characters')
    .test({
      test(value, testContext) {
        if (!/[A-Z, a-z]/.test(value)) {
          return testContext.createError({
            message: 'Should contain at least one letter',
          });
        }
        if (!/[0-9]/.test(value)) {
          return testContext.createError({
            message: 'Should contain one digit',
          });
        }
        if (!/[!@#$%^&*()_+\-=[\]{};':",.<>/?|\\]/.test(value)) {
          return testContext.createError({
            message: 'Should contain one special character',
          });
        }
        return true;
      },
    }),
  password: string()
    .required('Required field')
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be at most 32 characters')
    .test({
      test(value, testContext) {
        if (!/[A-Z, a-z]/.test(value)) {
          return testContext.createError({
            message: 'Should contain at least one letter',
          });
        }
        if (!/[0-9]/.test(value)) {
          return testContext.createError({
            message: 'Should contain one digit',
          });
        }
        if (!/[!@#$%^&*()_+\-=[\]{};':",.<>/?|\\]/.test(value)) {
          return testContext.createError({
            message: 'Should contain one special character',
          });
        }
        return true;
      },
    }),
});

export default schema;
