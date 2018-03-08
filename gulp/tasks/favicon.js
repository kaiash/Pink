module.exports = function () {
    $.gulp.task('favicon:generate', function (done) {
        $.realFavicon.generateFavicon({
            masterPicture: './src/img/icons/favicon.png',
            dest: './build/img/favicon/',
            iconsPath: 'img/favicon/',
            design: {
                ios: {
                    pictureAspect: 'backgroundAndMargin',
                    backgroundColor: '#ffffff',
                    margin: '14%',
                    assets: {
                        ios6AndPriorIcons: false,
                        ios7AndLaterIcons: false,
                        precomposedIcons: false,
                        declareOnlyDefaultIcon: true
                    }
                },
                desktopBrowser: {},
                windows: {
                    pictureAspect: 'noChange',
                    backgroundColor: '#ffffff',
                    onConflict: 'override',
                    assets: {
                        windows80Ie10Tile: false,
                        windows10Ie11EdgeTiles: {
                            small: false,
                            medium: true,
                            big: false,
                            rectangle: false
                        }
                    }
                },
                androidChrome: {
                    pictureAspect: 'shadow',
                    themeColor: '#ffffff',
                    manifest: {
                        name: 'Pink',
                        display: 'standalone',
                        orientation: 'notSet',
                        onConflict: 'override',
                        declared: true
                    },
                    assets: {
                        legacyIcon: false,
                        lowResolutionIcons: false
                    }
                },
                safariPinnedTab: {
                    pictureAspect: 'silhouette',
                    themeColor: '#ffffff'
                }
            },
            settings: {
                compression: 2,
                scalingAlgorithm: 'Mitchell',
                errorOnImageTooSmall: false,
                readmeFile: false,
                htmlCodeFile: true,
                usePathAsIs: false
            },
            markupFile: $.FAVICON_DATA_FILE
        }, function () {
            done();
        })
    });

    $.gulp.task('favicon:update', function (done) {
        var currentVersion = JSON.parse($.fs.readFileSync($.FAVICON_DATA_FILE)).version;
        $.realFavicon.checkForUpdates(currentVersion, function (err) {
            if (err) {
                throw err;
            }
        });
    });

};




