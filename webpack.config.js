const SRC_DIR = __dirname+'/client/src/app/';
const DIST_DIR = __dirname+'/dist/';

const conf = {
    entry: SRC_DIR+'index.js',
    output: {
        path: DIST_DIR,
        filename: "djams.bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
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