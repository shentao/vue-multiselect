module.exports = {
  root: true,
  parser: 'babel-eslint',
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'standard',
    'plugin:flowtype/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'html',
    'flowtype'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  'settings': {
    'flowtype': {
      "onlyFilesWithFlowAnnotation": false
    }
  }
}
