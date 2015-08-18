var gaze = require('gaze');

gaze(['backend-theme/**', 'frontend-theme/**'], {mode: 'watch'}, function () {
    this.on('all', function (event, filepath) {
        console.log(new Date, filepath + ' was ' + event);
    });
});
