module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx$': 'ts-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*.(test|spec)).(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: '<rootDir>/coverage/',

  verbose: true,
  testTimeout: 30000,

  testEnvironment: 'jsdom',

  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '(.*).d.ts$'],

  // Return proxies object for CSS modules via identity-obj-proxy
  moduleNameMapper: {
    '^.+\\.module\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'identity-obj-proxy',
  },
};
