const gulp = require('gulp');
const del = require('del');
const stylint = require('gulp-stylint');
const stylus = require('gulp-stylus');

gulp.task('lib:clean',function(){
  return del.sync([ './source/lib/*' ]);
})

gulp.task('lint:stylus', function () {
  return gulp.src([
    './source/css/*.styl',
    './source/css/_partial/*.styl',
    './source/css/_colors/*.styl'
  ]).pipe(stylint({
      config: '.stylintrc',
      reporter: {
        reporter: 'stylint-stylish',
        reporterOptions: {
          verbose: true
        }
      }
    }))
    .pipe(stylint.reporter());
});

gulp.task('build:stylus-common', function () {
  return gulp.src('./source/css/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./static/css/common/'));
})


gulp.task('lib', ['lib:clean']);
gulp.task('lint', ['lint:stylus']);
gulp.task('build', ['build:stylus-common'])
gulp.task('default', [ 'lint', 'build' ]);