"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractCommand {
    constructor(vorpal) {
        this.init();
        this.vorpalDefinition(vorpal);
    }
    init() { }
    action() {
        return function () { };
    }
    command() {
        return [this._name, this._description];
    }
    vorpalDefinition(vorpal) {
        vorpal.command(...this.command())
            .action(this.action());
    }
    ;
}
exports.default = AbstractCommand;
