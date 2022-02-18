const gulp = require('gulp'); // require Gulp module methods within our file

// Simple task which takes all HTML files in our project directory and copies them to a 'dist' folder
// src function to select input file
// pipe and dest functions to set destination of the copied file 
// Here, as the operation is asynchronous, you must use the async keyword in the declaration of the function
// Otherwise you get an 'did you forget to signal async' error
gulp.task('processHTML', async () => {
    gulp.src('index.html')
        .pipe(gulp.dest('dist'));
});