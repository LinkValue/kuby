import AbstractCommand from "./AbstractCommand"
import * as shell from "shelljs";

class Init extends AbstractCommand {

  init() {
    this._name = "init";
    this._description = "Init your minikube server";
    this._args = [];
    this._options = [];
  }

  action(): any {
    return function () {
      shell.exec("echo Init your minikube")
    }
  }
}

export default Init;
