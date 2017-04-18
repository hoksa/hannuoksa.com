var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var browserSync = require('browser-sync');
var copy = require('gulp-copy');

gulp.task('copy', function() {
  return gulp.src('./node_modules/tachyons/src/*.css')
    .pipe(copy('./src/precss/tachyons/', {prefix: 3}));
});

gulp.task('css', function() {
  var processors = [
    autoprefixer(),
    precss
  ];

  return gulp.src('./src/precss/styles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './src/'
    }
  });
});

gulp.task('watch', function() {
  gulp.watch('src/precss/**/*.css', ['css', browserSync.reload]);
  gulp.watch('src/js/**/*.js', browserSync.reload);
  gulp.watch('src/*.html', browserSync.reload);
});

gulp.task('default', ['copy', 'css', 'browser-sync', 'watch']);
