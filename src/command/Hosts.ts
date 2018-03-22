import AbstractCommand from "./AbstractCommand"
import * as shell from "shelljs";

class Host extends AbstractCommand {
  action(): any {
    return function () {
      shell.exec("echo Modify your host file, need to be sudo")
      // shell.exec("minikube start")
    }
  }

  init() {
    this._name = "hosts";
    this._description = "Modify your host file, need to be sudo";
    this._args = [];
    this._options = [];
  }
}

export default Host;
