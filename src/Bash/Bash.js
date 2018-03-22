"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
class Bash {
    static exec(bashCommand, args = null) {
        let command = child_process_1.exec(bashCommand, function (err, stdout, stderr) {
            if (err) {
                console.log(err);
            }
            console.log(stdout);
        });
        command.on('exit', function (code) {
        });
    }
}
exports.default = Bash;
