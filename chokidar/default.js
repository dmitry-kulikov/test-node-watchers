var chokidar = require('chokidar');

chokidar.watch(['backend-theme/**', 'frontend-theme/**']).on('all', function(event, path) {
    console.log(new Date, event, path);
});
