module.exports = function () {
    $.gulp.task('clean', function() {
            return $.del([
                './build'
            ]);
        });

    $.gulp.task('clean:dev', function() {
        return $.del([
            './build/**/*',
            '!./build/img',
            '!./build/img/images',
            '!./build/img/images/*.webp',
            '!./build/img/favicon'
        ]);
    });
};