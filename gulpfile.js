
const gulp = require('gulp');
const sass = require('gulp-sass')(require("sass"));
const sourcemaps = require('gulp-sourcemaps')
const uglify = require("gulp-uglify")
const imagemin = require("gulp-imagemin")
 
 
//tarefa sass//
function sassCompilado (){
    return gulp.src('./source/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
}

//tarefa javascript//
function jsCompilado(){
    return gulp.src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}
// tarefas imagens//

function imgComprimidas (){
    return gulp.src("./source/imagens/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/imagens"))
}

//exportacao das tarefas
exports.sass = sassCompilado;
exports.default = function(){
    gulp.watch("./source/styles/*.scss",{ignoreInitial: false}, gulp.series(sassCompilado));
    gulp.watch("./source/script/*.js",{ignoreInitial: false}, gulp.series(jsCompilado));
    gulp.watch("./source/imagens/*",{ignoreInitial: false}, gulp.series(imgComprimidas));
}

