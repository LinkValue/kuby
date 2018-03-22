"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCommand_1 = require("./AbstractCommand");
const shell = require("shelljs");
class Host extends AbstractCommand_1.default {
    action() {
        return function () {
            shell.exec("echo Modify your host file, need to be sudo");
            // shell.exec("minikube start")
        };
    }
    init() {
        this._name = "hosts";
        this._description = "Modify your host file, need to be sudo";
        this._args = [];
        this._options = [];
    }
}
exports.default = Host;
