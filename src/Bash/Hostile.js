const hostile = require('hostile');
hostile.set('127.0.0.1', 'peercdn.com', function (err) {
    if (err) {
        console.error(err);
    }
    else {
        console.log('set /etc/hosts successfully!');
    }
});
