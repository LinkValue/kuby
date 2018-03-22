let vorpal = require('vorpal')();
import vorpalDefault from 'vorpal-as-default';
import Init from './command/Init';
import Start from './command/Start';
import Stop from './command/Stop';
import Delete from './command/Delete';
import Destroy from './command/Destroy';
import Hosts from './command/Hosts';
let argv = process.argv

vorpal.delimiter('minik8s$');

vorpal
  .use(function(vorpal: any) { new Init(vorpal); })
  .use(function(vorpal: any) { new Start(vorpal) })
  .use(function(vorpal: any) { new Stop(vorpal); })
  .use(function(vorpal: any) { new Delete(vorpal); })
  .use(function(vorpal: any) { new Destroy(vorpal); })
  .use(function(vorpal: any) { new Hosts(vorpal); })

// To print help command if no command args. Don't want interactive one.
if (argv.length == 2) {
  vorpal.exec();
} else {
  vorpal
    .parse(argv)
}
