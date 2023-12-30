export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|svg)$': 'jest-transform-stub',
    '^@/(.*)': '<rootDir>/src/$1',
  },
};
