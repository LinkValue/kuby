"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCommand_1 = require("./AbstractCommand");
const shell = require("shelljs");
class Init extends AbstractCommand_1.default {
    init() {
        this._name = "init";
        this._description = "Init your minikube server";
        this._args = [];
        this._options = [];
    }
    action() {
        return function () {
            shell.exec("echo Init your minikube");
        };
    }
}
exports.default = Init;
