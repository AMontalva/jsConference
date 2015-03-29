var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    jsonminify = require('gulp-jsonminify'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat');

var jsSources = [
  'components/js/googleanalytics.js'
];
var sassSources = ['components/sass/style.scss'];
var htmlSources = ['builds/development/*.html'];
var jsonSources = ['builds/development/js/*.json'];
var cssSources = ['builds/development/css/*.css'];

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('builds/development/js'))
    .pipe(connect.reload())
});

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      image: 'builds/development/images',
      style: 'expanded'
    })
    .on('error', gutil.log))
    .pipe(gulp.dest('builds/development/css'))
    .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch('components/sass/*.scss', ['compass']);
  gulp.watch(htmlSources, ['html']);
  gulp.watch(jsonSources, ['json']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'builds/development/',
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src(htmlSources)
    .pipe(connect.reload())
});

gulp.task('json', function() {
  gulp.src(jsonSources)
    .pipe(connect.reload())
});

gulp.task('production', function() {
  var opts = {
    quotes: true
  }
  gulp.src(htmlSources)
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('builds/production'))
  gulp.src(cssSources)  
    .pipe(minifycss())
    .pipe(gulp.dest('builds/production/css'))
  gulp.src('builds/development/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('builds/production/js'))
  gulp.src(jsonSources)
    .pipe(jsonminify())
    .pipe(gulp.dest('builds/production/js'))
});

gulp.task('default', ['html', 'json', 'js', 'compass', 'connect', 'watch']);




