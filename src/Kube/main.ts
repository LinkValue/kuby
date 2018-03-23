let vorpal = require('vorpal')();
import vorpalDefault from 'vorpal-as-default';
import Init from './Init';
import Start from './Start';
import Stop from './Stop';
import Delete from './Delete';
import Destroy from './Destroy';
import Hosts from './Hosts';
let argv = process.argv

vorpal
  .use(function(vorpal: any) { new Init(vorpal); })
  .use(function(vorpal: any) { new Start(vorpal) })
  .use(function(vorpal: any) { new Stop(vorpal); })
  .use(function(vorpal: any) { new Delete(vorpal); })
  .use(function(vorpal: any) { new Destroy(vorpal); })
  .use(function(vorpal: any) { new Hosts(vorpal); })

vorpal
  .parse(argv)
