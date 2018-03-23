let vorpal = require('vorpal')();
import vorpalDefault from 'vorpal-as-default';
import Init from './Kube/Init';
import Start from './Kube/Start';
import Stop from './Kube/Stop';
import Delete from './Kube/Delete';
import Destroy from './Kube/Destroy';
import Hosts from './Kube/Hosts';
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
