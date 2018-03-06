// @flow
/* eslint-disable global-require,no-console,import/no-dynamic-require */
const path = require('path');

// https://github.com/survivejs/webpack-merge#smart-merging
const { smart: merge } = require('webpack-merge');

const dist = path.resolve(__dirname, '../../dist');

const config = platform => ({
    name: platform,
    entry: { app: `./src/${platform}.js` },
    output: {
        path: dist,
        filename: `[name].${platform}.js`,
        chunkFilename: `[name].${platform}.js`,
        publicPath: '/assets/javascript/',
    },
    stats: 'errors-only',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { envName: `app:${platform}` },
                },
            },
        ],
    },
});

const envConfig = require(`./webpack.config.${process.env.NODE_ENV}`)({
    dist,
    bundleName: 'app.browser.js',
});

module.exports = [
    merge(config('browser'), envConfig.browser),
    merge(
        config('server'),
        {
            target: 'node',
            externals: [require('webpack-node-externals')()],
            output: {
                libraryTarget: 'commonjs2',
            },
        },
        envConfig.server,
    ),
];
