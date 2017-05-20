// -------------------------------------
//   Config
// -------------------------------------
//  1 - Source root
//  2 - Distribution root
//  3 - set paths of assets
//  4 - set names for generated assets

var src  = './frontend-src/';  // 1
var dist = './frontend-dist/'; // 2

module.exports = {
  paths : { // 3
    styles : {
      src        : src + 'scss/**/*.scss',
      dest       : dist + 'css'
    },
    scripts : {
      src        : src + 'js/modules/**/*.js',
      vendor     : src + 'js/libs/**/*.js',
      dest       : dist + 'js',
      vendorDest : dist + 'js/vendor'
    },
    images : {
      src        : src + 'img/**/*',
      dest       : dist + 'img'
    },
    svg : {
      src        : src + 'svg/*.svg',
      dest       : dist + 'svg'
    },
    markup : {
      templates  : src + 'twig/[^_]*.twig',
      src        : src + 'twig/**/*.twig',
      dest       : dist
    },
    dist         : dist // used by clean task
  },
  names : { // 4
    css          : 'generatedByGulp.css',
    js : {
      app        : 'generatedByGulp.js',
      vendor     : 'vendor.js'
    },
    svgSprite    : 'svgSprite.svg'
  }
};

