'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('js', function() {
  gulp.src('./src/js/*.js')
    //.pipe(sourcemaps.init())
      .pipe(concat('all.js'))
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest('./js'));
});

gulp.task('js:watch', function () {
  gulp.watch('./src/js/*.js', ['js']);
});

gulp.task('scripts', function() {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./js'));
});

gulp.task('minify-css', function() {
  return gulp.src('./css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/*.scss', ['sass']);
});
