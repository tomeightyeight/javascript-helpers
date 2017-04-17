'use strict';

const path = require('path'),
    fs = require('fs'),
    ora = require('ora'),
    cliSpinners = require('cli-spinners'),
    SVGSpriter = require('svg-sprite'),
    assetsPath = path.resolve(__dirname, '../resources/assets/svg/'),
    publicPath = path.resolve(__dirname, '../public/assets/svg/'),
    example = process.argv.indexOf('--example') !== -1;

// SVGSpriter Config
const config = {
    'dest': publicPath,
    'mode': {
        'symbol': {
            'dest': publicPath,
            'sprite': './sprite.symbol.svg',
            'example': example
        }
    }
};

const spinner = ora({
    text: 'Generating SVG sprite...',
});

spinner.start();

const spriter = new SVGSpriter(config);

function getFiles () {
    return new Promise((resolve, reject) => {
        fs.readdir(assetsPath, (err, files) => {
            if (err) {
                reject(err);
                return;
            }

            files = files || [];
            
            for (let i = 0; i < files.length; i++) {
                // Add SVG source files
                let file = path.resolve(assetsPath, item);
                spriter.add(file, null, fs.readFileSync(file, { encoding: 'utf-8' }));   
            }

            resolve();
        });        
    });
};

function createSprite () {
    return new Promise((resolve, reject) => {
        // Compile the sprite
        spriter.compile((err, result) => {
            // Write `result` files to disk
            for (let mode in result) {
                for (let resource in result[mode]) {
                    fs.writeFile(result[mode][resource].path, result[mode][resource].contents, err => {
                        if (err) {
                            reject(err);
                            return;
                        }
                    });
                }
            }

            resolve();
        });
    });
};

(async function() {
    try {
        await getFiles();
        await createSprite();
        spinner.succeed('SVG sprite generated!\n');
    } catch(e) {
        spinner.fail('SVG sprite generation failed!\n');
    }
})();
