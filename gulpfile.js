const gulp         = require("gulp");
const plumber      = require("gulp-plumber");
const uglify       = require("gulp-uglify");
const concat       = require("gulp-concat");
const rename       = require("gulp-rename");

const js_src       = "./src/js/*.js";
const js_dist      = "./js/";
const js_dist_name = "scripts.js";

gulp.task('scripts', function(){
    return gulp.src(js_src)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat(js_dist_name))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(js_dist));
});

gulp.task('watch', function(){
    gulp.watch(js_src, gulp.series('scripts'));
});

gulp.task("default", gulp.series('watch'));

