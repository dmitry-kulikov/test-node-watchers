// Require
var watchr = require('watchr');

// Watch a directory or file
watchr.watch({
    paths: ['backend-theme', 'frontend-theme'],
    catchupDelay: 0,
    listeners: {
        change: function (changeType, filePath, fileCurrentStat, filePreviousStat) {
            console.log(new Date, 'a change event occurred:', arguments);
        }
    }
});
