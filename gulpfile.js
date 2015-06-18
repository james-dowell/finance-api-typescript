var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),

    config = {
        src: {
            scripts: 'src/**/*.ts'
        },
        dist: '.tmp/scripts'
    };

gulp.task('scripts', function () {

    var ts = gulp.src(config.src.scripts)
        .pipe($.typescript({
            noImplicitAny: true,
        }));

    return ts.js.pipe(gulp.dest(config.dist));
});
