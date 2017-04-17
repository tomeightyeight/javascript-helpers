'use strict';

// NODE_ENV set as part of deployment hooks
// env.NODE_ENV = 'production';

const path = require('path'),
    ora = require('ora'),
    cliSpinners = require('cli-spinners'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    assetsPath = path.resolve(__dirname, './public/assets/js/min/'),
    watch = process.argv.indexOf('--watch') !== -1;

webpackConfig.watch = watch;

const spinner = ora({
    text: 'Building JavaScript...',
    spinner: cliSpinners.monkey
});

spinner.start();

webpack(webpackConfig, (err, stats) => {
    if (err) {
        throw err;
    }

    spinner.succeed('JavaScript build complete!\n');

    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n');
});
