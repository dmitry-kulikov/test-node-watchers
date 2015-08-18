var fireworm = require('fireworm');

var startWatcher = function (path) {
    var fw = fireworm(path, {ignoreInitial: true});

    fw.add('**');

    fw.on('add', function (filename) {
        console.log(new Date, filename + ' added');
    });
    fw.on('change', function (filename) {
        console.log(new Date, filename + ' changed');
    });
    fw.on('remove', function (filename) {
        console.log(new Date, filename + ' removed');
    });
};

startWatcher('backend-theme');
startWatcher('frontend-theme');
