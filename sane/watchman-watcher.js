var sane = require('sane');

var startWatcher = function (path) {
    var watcher = sane(path, {watchman: true});

    watcher.on('all', function (filepath, root, stat) {
        console.log(new Date, filepath, root, stat);
    });
};

startWatcher('backend-theme');
startWatcher('frontend-theme');
