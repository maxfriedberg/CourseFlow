module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/test/utils/resolvers/styleResolver.js',
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/test/__mocks__/" ,
  ],
  snapshotResolver: '<rootDir>/test/utils/resolvers/snapshotResolver.js'
}