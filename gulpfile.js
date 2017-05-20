// -------------------------------------
//
//   Gulpfile
//
// Always code as if the guy who ends up maintaining your code will be a violent
// psychopath who knows where you live.
//
// Type `gulp --tasks` in terminal for description of the tasks
//
// -------------------------------------
//
// Available tasks:
//   `gulp`                     - compile assets, start browsersync and watch
//   `gulp build`               - clean dist, recompile assets for production
//
//   `gulp clean`               - clean dist folder
//   `gulp serve`               - spin up browserSync webserver
//
//   `gulp styles:dev`          - compile styles
//   `gulp styles:prod`         - compile styles for production
//   `gulp styles:csscss`       - search for redundancy
//   `gulp styles:parker`       - analyze CSS
//   `gulp styles:test`         - parker + CSSCSS
//
//   `gulp scripts:dev`         - compile scripts
//   `gulp scripts:prod`        - copy vendor scripts
//   `gulp scripts-vendor:dev`  - compile scripts for production
//   `gulp scripts-vendor:prod` - copy vendor scripts for production
//   `gulp scripts:test`        - run through jshint linter
//
//   `gulp images`              - minify images
//   `gulp images2webp`         - convert images to WebP format
//   `gulp svg`                 - minify SVG and build a sprite
//
//   `gulp markup`              - compile twig to html
//
//   `gulp watch`               - watch for everything
//   `gulp watch:styles`
//   `gulp watch:scripts`
//   `gulp watch:scripts-vendor`
//   `gulp watch:images`
//   `gulp watch:svg`
//   `gulp watch:markup`
//
// -------------------------------------
var gulp = require('gulp');



// -------------------------------------
// Load tasks
// -------------------------------------
//
require('./gulp/tasks/styles');
require('./gulp/tasks/scripts');
require('./gulp/tasks/images');
require('./gulp/tasks/svg');
require('./gulp/tasks/markup');
require('./gulp/tasks/clean');
require('./gulp/tasks/serve');
require('./gulp/tasks/watch');



// -------------------------------------
//   default task
// -------------------------------------
//  1 - Regenerate everything
//  2 - Fire up browserSync & watch for everything
//
gulp.task('default',
    gulp.series(
        gulp.parallel( // 1
            'styles:dev',
            'scripts:dev',
            'scripts-vendor:dev',
            'images',
            'svg',
            'markup'
        ),
        gulp.parallel('watch', 'serve') // 2
    )
);



// -------------------------------------
//   prod task
// -------------------------------------
//  1 - Clean dist folder
//  2 - Regenerate everything for production
//
gulp.task('prod',
    gulp.series(
        'clean', // 1
        gulp.parallel( // 2
            'styles:prod',
            'scripts:prod',
            'scripts-vendor:prod',
            'images',
            'images2webp',
            'svg',
            'markup'
        )
    )
);




// -------------------------------------
//   Documentation
// -------------------------------------
// - type `gulp --tasks` in Terminal
//
require('./gulp/docs/docs');