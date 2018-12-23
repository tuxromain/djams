const path = require('path');

const APP_DIR = path.resolve(__dirname, 'client/src/app');
const BUILD_DIR = path.resolve(__dirname, 'dist/public/js');

const conf = {
    entry:APP_DIR+'/index.js',
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 4001,
        historyApiFallback: true
    }
}

module.exports = conf;