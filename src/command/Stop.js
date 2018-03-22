"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCommand_1 = require("./AbstractCommand");
const shell = require("shelljs");
class Stop extends AbstractCommand_1.default {
    init() {
        this._name = "stop";
        this._description = "Stop your minikube server";
        this._args = [];
        this._options = [];
    }
    action() {
        return function () {
            shell.exec("echo Stop your minikube");
        };
    }
}
exports.default = Stop;
