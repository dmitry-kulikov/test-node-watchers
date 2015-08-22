var sane = require('sane');

var startWatcher = function (path) {
    var watcher = sane(path, {watchman: true});

    watcher.on('all', function (event, fileName, filePath, stat) {
        console.log(new Date, event, fileName, filePath, stat);
    });
};

startWatcher('backend-theme');
startWatcher('frontend-theme');
