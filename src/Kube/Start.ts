import AbstractCommand from "../Command/AbstractCommand"
import * as shell from "shelljs";

class Start extends AbstractCommand {

  init() {
    this._name = "start";
    this._description = "Start your minikube server";
    this._args = [];
    this._options = [];
  }

  configure(): any {

  }

  action(): any {
    return function () {
      shell.exec("echo Start your minikube")
      // shell.exec("minikube start")
    }
  }
}

export default Start;
