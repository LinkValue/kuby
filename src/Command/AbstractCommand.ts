abstract class AbstractCommand {
  protected _name: string;
  protected _description: string;
  protected _args: string[];
  protected _options: string[];

  protected commandList: string[];

  constructor(
      vorpal: any
  ) {
      this.init();
      this.vorpalDefinition(vorpal);
  }

  init() {}

  action(): any {
      return function () {}
  }

  command(): string[]  {
      return [this._name, this._description];
  }

  vorpalDefinition(vorpal: any):void {
      vorpal.command(...this.command())
          .action(this.action());
  };
}

export default AbstractCommand;
