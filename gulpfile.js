'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('js', function() {
  gulp.src('./src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(
      minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
    })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./js'));
});

gulp.task('js:watch', function () {
  gulp.watch('./src/js/*.js', ['js']);
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/*.scss', ['sass']);
});
