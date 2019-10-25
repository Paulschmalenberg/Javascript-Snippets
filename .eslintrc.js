module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        jquery: true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "MNI": "readonly",
        "CMS": "readonly",
        "MMP": "readonly",
        "MIC": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
    }
};