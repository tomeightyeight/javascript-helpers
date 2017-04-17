#!/bin/bash

node-sass --follow resources/assets/sass/style.scss | postcss -u autoprefixer -u postcss-clean -o public/assets/css/min/style.css --map file;
