global.$ = {
		path: {
		    task: require('./gulp/config/tasks.js')
	},
	gulp: require('gulp'),
    fs: require('fs'),
    realFavicon: require ('gulp-real-favicon'),
    FAVICON_DATA_FILE: 'faviconData.json',
	browserSync: require('browser-sync').create(),
    imageminJpegRecompress: require('imagemin-jpeg-recompress'),
    imageminPngQuant : require('imagemin-pngquant'),
    del: require('del'),
    gp: require('gulp-load-plugins')(),
    stylish: require('jshint-stylish'),
    spritesmith: require('gulp.spritesmith'),
    include: require('posthtml-include'),
    buffer: require('vinyl-buffer'),
    merge: require('merge-stream'),
	runS: require('run-sequence')

};

$.path.task.forEach(function (taskPath) {
	require(taskPath)();
});


$.gulp.task('dev',$.gulp.series(
    'clean:dev',
    'svg',
    $.gulp.parallel( 'style:dev', 'html:dev', 'jshint', 'js:dev', 's-png:dev', 'img:dev', 'fonts')));


$.gulp.task('build',$.gulp.series(
	'clean',
    'favicon:generate',
    'svg',
    $.gulp.parallel('style:build', 'html:build', 'js:build', 's-png:build','img:build', 'webp', 'fonts')));


$.gulp.task('default',$.gulp.series(
	'dev',
	$.gulp.parallel(
	    'watch',
        'serve'
    )
	));

$.gulp.task('start',$.gulp.series(
    'clean',
    $.gulp.parallel('favicon:generate', 'webp')));


	

