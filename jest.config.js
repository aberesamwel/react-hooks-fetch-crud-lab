module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!@adobe/css-tools).+\\.js$", // ✅ allow this package to be transformed
  ],
};
