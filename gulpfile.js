const gulp = require('gulp'); // require Gulp module methods within our file
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();

// Simple task which takes all HTML files in our project directory and copies them to a 'dist' folder
// src function to select input file
// pipe and dest functions to set destination of the copied file 
// Here, as the operation is asynchronous, you must use the async keyword in the declaration of the function
// Otherwise you get an 'did you forget to signal async' error
gulp.task('processHTML', async () => {
    gulp.src('*.html')
        .pipe(gulp.dest('dist'));
});

// Task for javascript files
// 1 : initialize JSHint and tell it to lint for ES6;
// 2 : tell JSHint which reporter to use to show any linting errors;
// 3 : configure babel (instead of .babelrc)
// 4 : minfying via uglify
// 5 : copy it to dist folder.
gulp.task('processJS', () => {
    gulp.src('scripts.js')
        .pipe(jshint({
            esversion: 6
        }))
        .pipe(jshint.reporter('default'))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Task to resolve the babel-polyfill issue
gulp.task('babelPolyfill', () => {
    gulp.src('node_modules/babel-polyfill/browser.js')
        .pipe(gulp.dest('dist/node_modules/babel-polyfill'));
});

// Task to set up our development server based on our production files
gulp.task('browserSync', () => {
    browserSync.init({
        server: './dist',
        port: 8080,
        ui: {
            port: 8081
        }
    });
});

// Watch changes brought to these files
gulp.task('watch', ['browserSync'], () => {
    gulp.watch('*.js', ['processJS']);
    gulp.watch('*.html', ['processHTML']);

    gulp.watch('dist/*.js', browserSync.reload);
    gulp.watch('dist/*.html', browserSync.reload);
});

// A task to run them all
// gulp.task('default', (callback) => {
//     runSequence(['processHTML', 'processJS', 'babelPolyfill'], 'watch', callback);
// });

