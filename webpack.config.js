const path = require('path');

//mode can change as production for minifed you js code

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output:{
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    devtool: 'eval-cheap-source-map',
    devServer: {
        static:'./public',
        open: true,
        port: 3000
    },
};