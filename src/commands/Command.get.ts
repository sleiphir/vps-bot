import { Client, Message } from "discord.js";
import { AbstractCommand } from "./AbstractCommand";

export class GetCommand extends AbstractCommand {

  constructor (client: Client, message: Message, args?: string[]) {
    super(client, message, args);
    this.middlewares = [];
  }

  async execute (): Promise<void> {
    if (!this.canExecute()) { return; }
    const path = this.args[0];
    const filename = path.split("/").pop();

    this.message.channel.send({
      files: [{
        attachment: path,
        name: filename,
      }],
    });
  }
}
