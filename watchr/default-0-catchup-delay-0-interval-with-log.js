// Require
var watchr = require('watchr');

// Watch a directory or file
watchr.watch({
    paths: ['backend-theme', 'frontend-theme'],
    catchupDelay: 0,
    interval: 0,
    listeners: {
        log: function (logLevel) {
            console.log(new Date, 'a log message occurred:', arguments);
        },
        change: function (changeType, filePath, fileCurrentStat, filePreviousStat) {
            console.log(new Date, 'a change event occurred:', arguments);
        }
    }
});
