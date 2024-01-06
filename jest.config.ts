export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleNameMapper: {
    '\\.(css|svg)$': 'jest-transform-stub',
    '^@/(.*)': '<rootDir>/src/$1',
  },
};
