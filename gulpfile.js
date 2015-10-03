var gulp = require('gulp'),
    sass = require('gulp-sass'), // compiles sass to CSS
    minify = require('gulp-minify-css'), // minifies CSS
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'), // minifies JS
    rename = require('gulp-rename');

    var paths = {
        'dev': {
            'scss': './dev/scss/',
            'js': './dev/js/'
        },
        'public': {
            'css': './public/css/',
            'js': './public/js/'
        },
        'vendor': {
            'bower': './bower_components/'
        }
    };

// --- TASKS
// Generate CSS App file
gulp.task('app.css', function() {
  // place code for your default task here
  return gulp.src('./dev/scss/*.scss')
      .pipe(sass({
          includePaths: [paths.vendor.bower+'foundation/scss']
      }))
      .pipe(minify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(paths.public.css));
});

// Generate Js App File
gulp.task('app.js', function(){
  return gulp.src([
        paths.vendor.bower+'jquery/dist/jquery.min.js',
        paths.vendor.bower+'foundation/js/foundation.min.js',
        paths.vendor.bower+'fastclick/lib/fastclick.js',
        paths.vendor.bower+'modernizr/modernizr.js',
        paths.vendor.bower+'cookies-eu-banner/dist/cookies-eu-banner.min.js'
    ])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.public.js));
});
