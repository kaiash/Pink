module.exports = function () {
    $.gulp.task('webp', () => {
        return $.gulp.src('./src/img/images/**/*.{png,jpg}')
            .pipe($.gp.size({
                title: 'webp:before'
            }))
            .pipe($.gp.webp({quality: 90}))
            .pipe($.gp.size({
                title: 'webp:after'
            }))
            .pipe($.gulp.dest('./build/img/images/'));
});
};
