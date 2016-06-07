var gulp = require('gulp'),
    sass = require('gulp-sass'), // compiles sass to CSS
    minify = require('gulp-minify-css'), // minifies CSS
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'), // minifies JS
    rename = require('gulp-rename');

var paths = {
    'dev': {
        'scss': './_assets/scss/',
        'js': './_assets/js/'
    },
    'public': {
        'css': './public/css/',
        'js': './public/js/'
    },
    'vendor': {
        'node': './node_modules/'
    }
};

// --- TASKS
// Generate CSS App file
gulp.task('app.css', function() {
  // place code for your default task here
  return gulp.src(paths.dev.scss+'*.scss')
      .pipe(sass({
          includePaths: [paths.vendor.node+'bootstrap-sass/assets/stylesheets']
      }))
      .pipe(minify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(paths.public.css));
});

// Generate Js App File
gulp.task('app.js', function(){
  return gulp.src([
        paths.vendor.node+'jquery/dist/jquery.min.js',
        paths.vendor.node+'bootstrap-sass/assets/javascripts/bootstrap.min.js',
        paths.dev.js+'cookies.js'
    ])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.public.js));
});
