"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let vorpal = require('vorpal')();
const Init_1 = require("./command/Init");
const Start_1 = require("./command/Start");
const Stop_1 = require("./command/Stop");
const Delete_1 = require("./command/Delete");
const Destroy_1 = require("./command/Destroy");
const Hosts_1 = require("./command/Hosts");
let argv = process.argv;
vorpal.delimiter('minik8s$');
vorpal
    .use(function (vorpal) { new Init_1.default(vorpal); })
    .use(function (vorpal) { new Start_1.default(vorpal); })
    .use(function (vorpal) { new Stop_1.default(vorpal); })
    .use(function (vorpal) { new Delete_1.default(vorpal); })
    .use(function (vorpal) { new Destroy_1.default(vorpal); })
    .use(function (vorpal) { new Hosts_1.default(vorpal); });
// To print help command if no command args. Don't want interactive one.
if (argv.length == 2) {
    vorpal.exec();
}
else {
    vorpal
        .parse(argv);
}
