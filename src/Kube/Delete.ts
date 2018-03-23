import AbstractCommand from "../Command/AbstractCommand"
import * as shell from "shelljs";

class Delete extends AbstractCommand {
  action(): any {
    return function () {
      shell.exec("echo Delete your minikube")
    }
  }

  init() {
    this._name = "delete";
    this._description = "Delete your minikube server";
    this._args = [];
    this._options = [];
  }
}

export default Delete;
