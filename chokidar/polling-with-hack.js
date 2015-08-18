var chokidar = require('chokidar');

process.chdir(__dirname + '/../');
chokidar.watch('.', {ignoreInitial: true, usePolling: true, interval: 0}).on('all', function(event, path) {
    console.log(new Date, event, path);
});
