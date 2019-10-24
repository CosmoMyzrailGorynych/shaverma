const gulp = require('gulp'),
      rename = require('gulp-rename'),
      stylus = require('gulp-stylus');

const buildNormal = () =>
    gulp.src('./index.styl')
    .pipe(stylus())
    .pipe(rename('shaverma.css'))
    .pipe(gulp.dest('./dist'));

const buildMinified = () =>
    gulp.src('./index.styl')
    .pipe(stylus({
        compress: true
    }))
    .pipe(rename('shaverma.min.css'))
    .pipe(gulp.dest('./dist'));

const watch = () => {
    gulp.watch(['./index.styl', './lib/**/*.styl'], build);
};

const build = gulp.parallel(buildNormal, buildMinified);

const defaultTask = gulp.series(build, watch);

exports.build = build;
exports.default = defaultTask;