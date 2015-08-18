// Require
var watchr = require('watchr');

// Watch a directory or file
watchr.watch({
    paths: ['backend-theme', 'frontend-theme'],
    listeners: {
        change: function (changeType, filePath, fileCurrentStat, filePreviousStat) {
            console.log(new Date, 'a change event occurred:', arguments);
        }
    }
});
