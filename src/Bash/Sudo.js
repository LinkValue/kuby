"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sudo = require("sudo-prompt");
class Sudo {
    static exec(command) {
        let options = {};
        sudo.exec('node main.js hostile 127.0.0.1 test.node.test', options, function (error, stdout, stderr) {
            if (error)
                throw error;
            console.log('stdout: ' + stdout);
        });
    }
}
