var watch = require('node-watch');

watch(['backend-theme', 'frontend-theme'], function (filename) {
    console.log(new Date, filename);
});
