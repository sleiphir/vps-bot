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

      // Max character count in one message
      const MAX_LENGTH = 1965;

      if (message.length > MAX_LENGTH) {
        const messages = message.match(new RegExp(`.{1,${MAX_LENGTH}}`, "gs"));

        for (message of messages) {
          this.message.channel.send(`\`\`\`sh\n${message}\n\`\`\``);
        }
      } else {
        this.message.channel.send(`\`\`\`sh\n${message}\n\`\`\``);
      }
    });
  }

}
