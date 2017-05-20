// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp    : The streaming build system
// plumber : Prevent pipe breaking
// twig    : Compiles twig to html
//
// -------------------------------------
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var twig    = require('gulp-twig');

// Relative path to config file
var config  = require('../config');



// -------------------------------------
//   markup
// -------------------------------------
// Compile twig templates to html pages 
//
gulp.task('markup', function() {
    'use strict';

    return gulp.src(config.paths.markup.templates)
        .pipe(plumber())
        .pipe(twig({}))
        .pipe(gulp.dest(config.paths.markup.dest))
});