import { Client, Message } from "discord.js";
import { AbstractCommand } from "./AbstractCommand";
import { exec } from "child_process";

export class BashCommand extends AbstractCommand {

  constructor (client: Client, message: Message, args?: string[]) {
    super(client, message, args);
    this.middlewares = [];
  }

  async execute (): Promise<void> {
    if (!this.canExecute()) { return; }

    let message = "";

    exec(this.args.join(" "), (error, stdout, stderr) => {
      message = stdout;

      if (stderr) {
        message = stderr;
      }

      if (error) {
        message = `${error.message}`;
      }

      this.message.channel.send(`\`\`\`sh\n${message}\n\`\`\``);
    });
  }

}
