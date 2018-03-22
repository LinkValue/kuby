"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCommand_1 = require("./AbstractCommand");
const shell = require("shelljs");
class Destroy extends AbstractCommand_1.default {
    action() {
        return function () {
            shell.exec("echo Destroy your minikube");
            // shell.exec("minikube start")
        };
    }
    init() {
        this._name = "destroy";
        this._description = "Destroy your minikube server";
        this._args = [];
        this._options = [];
    }
}
exports.default = Destroy;
