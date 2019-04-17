## npm-check
npm install npm-check
npm-check -u -g
空格选择，Enter安装


## gulp-sequence
按顺序逐个同步地运行 Gulp 任务

const gulpSequence = require('gulp-sequence')

gulp.task('update', gulpSequence('clean', 'build', 'revreplace', function () {
  console.log('----------finished----------')
  process.exit(0);
}))


## 通过 gulp-babel 转码后 浏览器不支持 require
// setup by `npm i gulp gulp-rollup rollup-plugin-babel babel-preset-es2015 babel-plugin-external-helpers --save-dev`

// gulpfile.js
var gulp       = require('gulp'),
    rollup     = require('gulp-rollup');

gulp.task('bundle', function() {
  gulp.src('./src/**/*.js')
    // transform the files here.
    .pipe(rollup({
      // any option supported by Rollup can be set here.
      "format": "iife",
      "plugins": [
        require("rollup-plugin-babel")({
          "presets": [["es2015", { "modules": false }]],
          "plugins": ["external-helpers"]
        })
      ],
      entry: './src/main.js'
    }))
    .pipe(gulp.dest('./dist'));
});


## es6 + scss 开发环境

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const del = require('del');

const babel = require('gulp-babel');
const rollup = require('gulp-rollup');
<!-- npm i gulp gulp-rollup rollup-plugin-babel babel-preset-es2015 babel-plugin-external-helpers --save-dev -->

