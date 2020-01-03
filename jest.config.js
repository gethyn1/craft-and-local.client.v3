module.exports = {
  "roots": [
    "<rootDir>"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest",
    '^.+\\.(js|jsx|ts|tsx)?$': 'babel-jest'
  },
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file-mock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  },
  "automock": false,
  "setupFiles": [
    "./setup-jest.ts"
  ]
}
