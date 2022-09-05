module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
};
