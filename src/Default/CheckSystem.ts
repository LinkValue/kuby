import * as shell from "shelljs";
import * as process from "process";
const colors = require('chalk')

class CheckSystem {
    static execute() {
        if(!shell.which("minikube")) {
          shell.echo(colors.red('Can\'t find minikube, The minikube part not going to work'));
        }
        if(!shell.which("helm")) {
          shell.echo(colors.red('Can\'t find helm, The helm part not going to work'));
        }
        // process.exit(1);
    }
}

export default CheckSystem;
