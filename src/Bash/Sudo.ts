import * as sudo from 'sudo-prompt';

class Sudo
{
    public static exec(command: string) {
        let options = {
        };
        sudo.exec('node main.js hostile 127.0.0.1 test.node.test', options,
          function(error: any, stdout: any, stderr: any) {
            if (error) throw error;
            console.log('stdout: ' + stdout);
          }
        );
    }
}
