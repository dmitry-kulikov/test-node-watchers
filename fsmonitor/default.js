var fsmonitor = require('fsmonitor');

var eventHandler = function (change) {
    console.log((new Date).toString() + " Change detected:\n" + change);
};
fsmonitor.watch('backend-theme', null, eventHandler);
fsmonitor.watch('frontend-theme', null, eventHandler);
