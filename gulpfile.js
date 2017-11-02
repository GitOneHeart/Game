var gulp = require('gulp')
var less = require('gulp-less')
// 将js文件复制
gulp.task('src', function () {
    gulp.src('./src/js/**/*.js')
        .pipe(gulp.dest('./dist/js'))
})