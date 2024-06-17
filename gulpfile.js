const gulp = require('gulp');
const sass = require('gulp-sass')(require("sass"));
const sourcemaps = require('gulp-sourcemaps')
const uglify = require("gulp-uglify")
const imagemin = require("gulp-imagemin")
 
 
//tarefa sass//
function sassCompilado (){
    return gulp.src('./src/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/styles/main.css"));
}

//tarefa javascript//
function jsCompilado(){
    return gulp.src("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}
// tarefas imagens//

function imgComprimidas (){
    return gulp.src("./src/imagens/*")
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