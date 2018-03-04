module.exports = function () {
    $.gulp.task('html:dev', ()=> {
        return $.gulp.src('./src/*.html')
            .pipe($.gp.rigger())
            .pipe($.gp.realFavicon.injectFaviconMarkups(JSON.parse($.fs.readFileSync($.FAVICON_DATA_FILE)).favicon.html_code))
            .pipe($.gp.size({
                title: 'HTML:dev'
            }))
            .pipe($.gp.htmlhint('.htmlhintrc'))
            .pipe($.gp.htmlhint.reporter("htmlhint-stylish"))
            .pipe($.gp.htmlhint.failOnError({ suppress: true }))
            .on("error", $.gp.notify.onError(function(error) {
                return {
                    title: "HTML ERROR",
                    message: "Error: <%= error.message %>"
                };
            }))
            .pipe($.gulp.dest('./build/'))
            .on('end',$.browserSync.reload);
});

    $.gulp.task('html:build', function () {
        return $.gulp.src('src/*.html')
            .pipe($.gp.rigger())
            .pipe($.gp.realFavicon.injectFaviconMarkups(JSON.parse($.fs.readFileSync($.FAVICON_DATA_FILE)).favicon.html_code))
            .pipe($.gp.size({
                title: 'HTML:dev'
            }))
            .pipe($.gp.htmlhint('.htmlhintrc'))
            .pipe($.gp.htmlhint.reporter("htmlhint-stylish"))
            .pipe($.gp.htmlhint.failOnError({ suppress: true }))
            .pipe($.gulp.dest('./build/'))
            .pipe($.gp.htmlmin({collapseWhitespace: true}))
            .pipe($.gp.rename({suffix: '.min'}))
            .pipe($.gp.size({
                title: 'HTML:build'
            }))
            .on("error", $.gp.notify.onError(function(error) {
                return {
                    title: "HTML ERROR",
                    message: "Error: <%= error.message %>"
                };
            }))
            .pipe($.gulp.dest('./build/min_html/'))
            .on('end',$.browserSync.reload);
    });

};



