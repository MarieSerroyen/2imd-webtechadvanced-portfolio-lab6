const Primus = require('primus');

let go = (server) => {
    const primus = new Primus(server, {/* options */});


    //primus.save(__dirname +'/primuslib.js');

    primus.on('connection', (spark) => {
        // spark is the new connection.
        console.log("👌");
    });


};

module.exports.go = go;