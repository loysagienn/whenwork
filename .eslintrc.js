const { moduleResolverConfig } = require('./buildConfig');

module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'airbnb/hooks',
    ],
    env: {
        node: true,
    },
    plugins: [
        'import',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.mjs',
                ],
            },
            'babel-module': moduleResolverConfig(), // для eslint'а используем серверный конфиг
        },
    },
    ignorePatterns: [
        'lib/**/*.js',
        'static/**/*.js',
    ],
    rules: {
        'max-len': ['error', { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true }],
        indent: ['error', 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/prop-types': 'off',
        'react/sort-comp': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/prefer-default-export': 'off',
        'no-param-reassign': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.mjs'] }],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
    },
    overrides: [
        {
            files: [
                'src/app/**/*.mjs',
            ],
            env: {
                'shared-node-browser': true,
            },
        },
        {
            files: [
                'src/client/**/*.mjs',
            ],
            env: {
                browser: true,
            },
        },
        {
            files: [
                'src/server/**/*.mjs',
            ],
            env: {
                node: true,
            },
        },
    ],
};
