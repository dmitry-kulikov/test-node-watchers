var directoryWatcher = require('directory-watcher');

var startWatcher = function (path) {
    directoryWatcher.create(path, function (err, watcher) {
        watcher.on('add', function (files) {
            console.log(new Date, 'add', path, files);
        });

        watcher.on('change', function (files) {
            console.log(new Date, 'change', path, files);
        });

        watcher.on('delete', function (files) {
            console.log(new Date, 'delete', path, files);
        });
    });
};

startWatcher('backend-theme');
startWatcher('frontend-theme');
