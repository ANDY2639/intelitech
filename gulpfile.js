const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

gulp.task('pack-fonts', () => {
  return gulp.src('src/webfonts/**/*.+(ttf|woff2)')
    .pipe(gulp.dest('dist/webfonts'))
});

gulp.task('pack-images', () => {
  return gulp.src('src/img/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(gulp.dest('dist/img'))
});

gulp.task('pack-js', () => {    
  return gulp.src(['src/js/app.js'])
    .pipe(concat('app.js'))
    .pipe(minify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('pack-css', () => {
  return gulp.src(['src/scss/main.scss'])
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concat('app.css'))
    .pipe(minify())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', () => {
  gulp.watch('src/webfonts/**/*.+(ttf|woff2)', gulp.series('pack-fonts'));
  gulp.watch('src/img/**/*.+(png|jpg|jpeg|gif|svg)', gulp.series('pack-images'));
  gulp.watch('src/js/**/*.js', gulp.series('pack-js'));
  gulp.watch('src/scss/**/*.scss', gulp.series('pack-css'));
});

// Default task
gulp.task('default', gulp.series('pack-fonts', 'pack-images', 'pack-js', 'pack-css', 'watch'));
