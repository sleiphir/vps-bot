# Boilerplate template for discord bots

_Bot Setup_

* Create a new discord application from here https://discord.com/developers/applications
* Add a Bot in the Bot section of your newly created application and copy the token
* In the OAuth2 section select `Bot` as the scope then set the right permissions for your bot below
* Add your application to your discord server using the generated link in the scope section

_Project Setup_

* Clone this repo with `git clone https://github.com/sleiphir/discord-bot-template.git`
* Create an `.env` file in the root directory of the project
* Fill the `.env` file with `APP_TOKEN=YOUR BOT TOKEN` and any other sensitive data that you need
* If you add anything more to the `.env` file make sure to add everything to the `src/config.ts` file.

The default prefix for the commands is `c!` but you can change it in `src/config.ts`
