var monitor = require('yawatch').createMonitor();

monitor.stat(['backend-theme', 'frontend-theme'], function (err) {
    if (err) {
        throw err;
    }

    monitor.on('*', function (event, pathname) {
        console.log(new Date, event, pathname);
    });
});
