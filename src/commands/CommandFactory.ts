import { Client, Message } from "discord.js";
import { AbstractCommand, CommandType } from "./AbstractCommand";
import { BashCommand } from "./Command.sh";

export class CommandFactory {

  createCommand (client: Client, message: Message, input: string, args: string[]): AbstractCommand {
    let command: AbstractCommand;
    const type = CommandType[input as keyof typeof CommandType];

    switch (type) {
    case CommandType.sh:
      command = new BashCommand(client, message, args);
      break;
    default:
      command = null;
    }

    return command;
  }

}
