var pathWatcher = require('pathwatcher');

pathWatcher.watch('backend-theme', function (event, path) {
    console.log(new Date, event, path);
});
pathWatcher.watch('frontend-theme', function (event, path) {
    console.log(new Date, event, path);
});
