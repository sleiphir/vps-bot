import * as dotenv from "dotenv";
dotenv.config();

const config = {
  app: {
    prefix: "v!",
    token: process.env.APP_TOKEN,
  },
};

export default config;
