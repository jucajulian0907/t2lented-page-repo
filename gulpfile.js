const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require("sass"));
const concat = require('gulp-concat');
const paths = {
    js: 'src/js/**/*.js'
}
function css( ) {
    return src ( 'src/**/*.scss')
        .pipe( sass().on("error",sass.logError) )
        .pipe( dest('./build/css/') )
}


function javascript () {
    return src(paths.js)
        .pipe( concat( 'bundle.js' ) )
        .pipe( dest('./build/js') )
}

function watchArchivos() {  
    watch('src/**/*.scss', css);
    watch(paths.js, javascript);
}

exports.css = css;
exports.watchArchivos = watchArchivos;
exports.default = series ( css, javascript, watchArchivos );