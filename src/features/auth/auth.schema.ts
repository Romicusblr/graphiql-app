import { InferType, object, string } from 'yup';

export const userLoginSchema = object({
  email: string()
    .email('Email must be a valid email')
    .required('Required field'),
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

export const userRegisterSchema = userLoginSchema.shape({
  name: string().required('Required field'),
});

export type UserRegister = InferType<typeof userRegisterSchema>;
export type UserLogin = InferType<typeof userLoginSchema>;
