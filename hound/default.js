var hound = require('hound');

var startWatcher = function (path) {
    var watcher = hound.watch(path);

    watcher.on('create', function (file) {
        console.log(new Date, file + ' was created')
    });
    watcher.on('change', function (file) {
        console.log(new Date, file + ' was changed')
    });
    watcher.on('delete', function (file) {
        console.log(new Date, file + ' was deleted')
    });
};

startWatcher('backend-theme');
startWatcher('frontend-theme');
