var webpack = require('webpack'),
    path = require('path'),
    javascriptRoot = path.resolve(__dirname, '../resources/javascript/src'),
    assetsRoot = path.resolve(__dirname, '../public/assets/js/min');

module.exports = {
    cache: true,
    entry: {
        global: "./resources/assets/js/src/entries/global.js",
        home: "./resources/assets/js/src/entries/home.js",
        packages: "./resources/assets/js/src/entries/packages.js",
        cartonly: "./resources/assets/js/src/entries/cartonly.js",
        signup: "./resources/assets/js/src/entries/signup.js"
    },
    output: {
        path: assetsRoot,
        publicPath: '/assets/js/min/',
        pathinfo: true,
        filename: "[name].bundle.js",
        chunkFilename: "[id].[chunkhash].js"
    },
    module: {
        preLoaders: [
            {
                test: /\.vue$/,
                loader: 'eslint',
                exclude: /(node_modules|bower_components)/,
                include: javascriptRoot
            },
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /(node_modules|bower_components)/,
                include: javascriptRoot
            }
        ],
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    },
    vue: {
        loaders: {
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1',
            scss: 'vue-style-loader!css-loader!sass-loader'
        }
    },
    eslint: {
        failOnWarning: false,
        failOnError: true,
        formatter: require('eslint-friendly-formatter')
    },
    resolve: {
        modulesDirectories: ["node_modules", "bower_components"],
        alias: {
            'handlebars': 'handlebars/runtime.js',
            'vue$': process.env.NODE_ENV === 'production' ? 'vue/dist/vue.min.js' : 'vue/dist/vue'
        }
    },
    plugins: [
        // CommonsChunkPlugin splits common modules into a commons bundle
        // new webpack.optimize.CommonsChunkPlugin('commons.bundle.js'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false,
            sourceMap: true
        })
    ],
};
