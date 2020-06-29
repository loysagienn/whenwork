const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { classNameTemplate } = require('./buildConfig');

const isProductionMode = process.env.NODE_ENV === 'production';

const staticDir = path.resolve(__dirname, 'static');

module.exports = {
    mode: isProductionMode ? 'production' : 'development',
    optimization: {
        usedExports: true,
    },
    entry: {
        app: './src/client/index.mjs',
    },
    externals: {
        ramda: 'R',
        react: 'React',
        'react-dom': 'ReactDOM',
        // recompose: 'Recompose',
        redux: 'Redux',
        'react-redux': 'ReactRedux',
        'redux-thunk': 'ReduxThunk',
        // reselect: 'Reselect',
        window: 'window',
    },
    output: {
        path: staticDir,
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                exclude: /(node_modules)/,
                // Для того чтобы можно было импортить не .mjs модули через destructuring
                type: 'javascript/auto',
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.styl$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/public/path/to/',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: classNameTemplate,
                                // context: path.resolve(__dirname, 'src'),
                                // hashPrefix: 'my-custom-hash',
                            },
                        },
                    },
                    {
                        loader: 'stylus-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    // devtool: isProductionMode ? 'none' : 'cheap-module-source-map',
    devtool: 'none',
};
