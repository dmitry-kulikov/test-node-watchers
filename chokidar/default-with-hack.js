var chokidar = require('chokidar');

process.chdir(__dirname + '/../');
chokidar.watch('.', {ignoreInitial: true}).on('all', function(event, path) {
    console.log(new Date, event, path);
});
