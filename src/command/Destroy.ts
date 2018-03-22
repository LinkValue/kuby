import AbstractCommand from "./AbstractCommand"
import * as shell from "shelljs";

class Destroy extends AbstractCommand {
  action(): any {
    return function () {
      shell.exec("echo Destroy your minikube")
      // shell.exec("minikube start")
    }
  }

  init() {
    this._name = "destroy";
    this._description = "Destroy your minikube server";
    this._args = [];
    this._options = [];
  }
}

export default Destroy;
