module.exports = {
  "extends": "@meteorjs/eslint-config-meteor",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "env": {
    "meteor": true
  },
  "rules": {
    "no-return-assign": ["error", "except-parens"],
    "react/prefer-stateless-function": [0],
    "import/no-unresolved": [ 2, { "ignore": ["^meteor/"] } ]
  },
};
