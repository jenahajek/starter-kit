// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp        : The streaming build system
// browserSync : browser sync
//
// -------------------------------------
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Relative path to config file
var config      = require('../config');



// -------------------------------------
//   serve
// -------------------------------------
//  Spin up browserSync webserver on port 3000
//
//  1 - mirrors clicks, scrolls, etc. - false for performance, true for testing
//  2 - opens page in browser automatically
//  3 - notifies about changes in corner of the browser window
//  4 - keep an eye for generated files and push changes to browser
gulp.task('serve', function() {
    browserSync.init({
        ghostMode : false, // 1
        open      : false, // 2
        notify    : false, // 3
        server    : {
            baseDir: './frontend-dist/',
            index: 'index.html'
        },
        files     : [      // 4
            './frontend-dist/css/*.css',
            './frontend-dist/js/**/*.js',
            './frontend-dist/img/**/*',
            './frontend-dist/*.html'
        ]
    });
});