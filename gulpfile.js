var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
    // use globbing if more files are made  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
          stream: true
      }))
});
// gulp.watch('app/scss/**/*.scss', ['sass']); 
gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']); 
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload); 
})

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
})