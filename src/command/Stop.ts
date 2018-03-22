import AbstractCommand from "./AbstractCommand"
import * as shell from "shelljs";

class Stop extends AbstractCommand {
  init() {
    this._name = "stop";
    this._description = "Stop your minikube server";
    this._args = [];
    this._options = [];
  }

  action(): any {
    return function () {
      shell.exec("echo Stop your minikube")
    }
  }
}

export default Stop;
