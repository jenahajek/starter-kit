// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp : The streaming build system
// del  : Remove files
//
// -------------------------------------
var gulp   = require('gulp');
var del    = require('del');

// Relative path to config file
var config = require('../config');



// -------------------------------------
//   clean
// -------------------------------------
//  Remove frontend-dist folder in order to get rid off old unused assets before
//  regenerating new assets
//
gulp.task('clean', function() {
    return del([config.paths.dist]);
});