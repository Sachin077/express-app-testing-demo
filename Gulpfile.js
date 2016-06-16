var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var mocha = require('gulp-mocha');

gulp.task('test', function () {
  return gulp.src(['test/unit/*.js'], {read: false})
    // gulp-mocha needs filepaths so you can't have any plugins before it 
    .pipe(mocha({reporter: 'node_modules/mocha-junit-reporter'}));
});