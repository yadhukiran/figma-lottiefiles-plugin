/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const noop = () => {};

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.test.json",
    },
    parent: {
      postMessage: noop,
    },
    figma: {},
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.ts",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.ts",
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    // If you're using babel for both:
    // "^.+\\.[jt]sx?$": "babel-jest",
  },
};
