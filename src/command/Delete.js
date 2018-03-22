"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCommand_1 = require("./AbstractCommand");
const shell = require("shelljs");
class Delete extends AbstractCommand_1.default {
    action() {
        return function () {
            shell.exec("echo Delete your minikube");
        };
    }
    init() {
        this._name = "delete";
        this._description = "Delete your minikube server";
        this._args = [];
        this._options = [];
    }
}
exports.default = Delete;
