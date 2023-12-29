export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|svg)$': 'identity-obj-proxy',
    '^@/(.*)': '<rootDir>/src/$1',
  },
};
