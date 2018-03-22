"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCommand_1 = require("./AbstractCommand");
const shell = require("shelljs");
class Start extends AbstractCommand_1.default {
    init() {
        this._name = "start";
        this._description = "Start your minikube server";
        this._args = [];
        this._options = [];
    }
    action() {
        return function () {
            shell.exec("echo Start your minikube");
            // shell.exec("minikube start")
        };
    }
}
exports.default = Start;
