module.exports = {
  // preset: 'jest-dynalite',
  testEnvironment: 'jest-dynalite/environment',
  setupFilesAfterEnv: ['./jest-dynalite-setup.js'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  coverageDirectory: '../coverage',
  testTimeout: 45000,
};
