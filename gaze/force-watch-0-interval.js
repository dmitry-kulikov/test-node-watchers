var gaze = require('gaze');

gaze(['backend-theme/**', 'frontend-theme/**'], {mode: 'watch', interval: 0}, function () {
    this.on('all', function (event, filepath) {
        console.log(new Date, filepath + ' was ' + event);
    });
});
