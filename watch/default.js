var watch = require('watch');

watch.createMonitor('backend-theme', function (monitor) {
    monitor.on('created', function (f, stat) {
        // Handle new files
        console.log(new Date, f, stat);
    });
    monitor.on('changed', function (f, curr, prev) {
        // Handle file changes
        console.log(new Date, f, curr, prev);
    });
    monitor.on('removed', function (f, stat) {
        // Handle removed files
        console.log(new Date, f, stat);
    });
});

watch.createMonitor('frontend-theme', function (monitor) {
    monitor.on('created', function (f, stat) {
        // Handle new files
        console.log(new Date, f, stat);
    });
    monitor.on('changed', function (f, curr, prev) {
        // Handle file changes
        console.log(new Date, f, curr, prev);
    });
    monitor.on('removed', function (f, stat) {
        // Handle removed files
        console.log(new Date, f, stat);
    });
});
