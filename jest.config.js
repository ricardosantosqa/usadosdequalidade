module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'app.js',
    '!node_modules/**',
    '!scripts/**',
  ],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 20,
      lines: 20,
      statements: 20,
    },
  },
  testMatch: ['**/*.test.js'],
  verbose: true,
};
