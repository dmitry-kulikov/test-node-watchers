var sane = require('sane');

var startWatcher = function (path) {
    var watcher = sane(path, {poll: false});

    watcher.on('all', function (event, fileName, filePath, stat) {
        console.log(new Date, event, fileName, filePath, stat);
    });
};

startWatcher('backend-theme');
startWatcher('frontend-theme');
