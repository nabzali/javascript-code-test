/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/tests/**/*.test.ts',       // ✅ Your actual tests folder
    '**/__tests__/**/*.test.ts'           // ✅ Optional: supports inline __tests__ too
  ],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  verbose: false,                         // ✅ Optional: clean test output
  cache: true                             // ✅ Speeds up repeated test runs
};
