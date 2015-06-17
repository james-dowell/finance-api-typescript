var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),

    config = {
        src: {
            scripts: 'src/**/*.ts'
        },
        dist: '.tmp/scripts'
    };

gulp.task('scripts', function () {

    return gulp.src(config.src.scripts)
        .pipe($.ts({
            noImplicitAny: true,
            out: config.dist + 'scripts.js'
        });
});
