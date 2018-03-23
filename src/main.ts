let vorpal = require('vorpal')();
import vorpalDefault from 'vorpal-as-default';
import CheckSystem from './Default/CheckSystem'
import * as shell from "shelljs";
let argv = process.argv

CheckSystem.execute();

vorpal.delimiter('kuby$');

vorpal
    .command('minikube')
    .option('-v, --verbose', 'Print foobar instead.')
    .description('Outputs "bar".')
    .alias('minikube')
    .action(function(args, callback) {
      console.log(args);
        if (!args.optionalArg) {
          args.optionalArg = "help";
        }
        shell.exec("node src/Kube/main.js " + args.optionalArg);
    });

vorpal
  .command('helm <requiredArg> [optionalArg]')
  .option('-v, --verbose', 'Print foobar instead.')
  .description('Outputs "bar".')
  .alias('helm')
  .action(function(args, callback) {

    callback();
  });

// To print help command if no command args. Don't want interactive one.
if (argv.length == 2) {
  vorpal.exec();
} else {
  vorpal
    .parse(argv)
}
