// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp     : The streaming build system
// plumber  : Prevent pipe breaking
// imagemin : Minify PNG, JPEG, GIF and SVG images
// pngquant : imagemin plugin for compressing PNG
// webp     : converts PNG, JPEG, TIFF to WebP
//
// -------------------------------------
var gulp     = require('gulp');
var plumber  = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant'); // $ npm i -D imagemin-pngquant
var webp     = require('gulp-webp');

// Relative path to config file
var config   = require('../config');



// -------------------------------------
//   images
// -------------------------------------
//  Takes images from `frontend-src` folder, compress them and outputs to
//  frontend-dist folder.
//
gulp.task('images', function(){
    return gulp.src(config.paths.images.src)
        .pipe(plumber())
        .pipe(imagemin({
            optimizationLevel : 3,                        // png
            progressive       : true,                     // jpg
            interlaces        : true,                     // gif
            svgoPlugins       : [{removeViewBox: false}], // svg
            use               : [pngquant()]              // png
        }))
        .pipe(gulp.dest(config.paths.images.dest));
});



// -------------------------------------
//   images2webp
// -------------------------------------
//  Takes images from `frontend-src` folder and converts images to WebP
//
gulp.task('images2webp', function () {
    return gulp.src(config.paths.images.src)
        .pipe(webp({
            quality : 75,
            sns     : 75
        }))
        .pipe(gulp.dest(config.paths.images.dest));
});