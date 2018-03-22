import { exec } from 'child_process';

class Bash
{
  public static exec(bashCommand: string, args: string[] = null) {
    let command = exec(bashCommand, function(err: any, stdout: any, stderr: any) {
      if (err) {
        console.log(err);
      }
      console.log(stdout);
    });

    command.on('exit', function (code: any) {
      
    });
  }
}

export default Bash;
