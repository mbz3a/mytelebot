const {Telegraf} = require("telegraf");
const {Express} = require("express");

const bot = new Telegraf('1960602083:AAE_Gf8uXYD9xzrQtZZMcwAV6RV0gUqVBtE');
const ex = new Express();

bot.start(response => response.reply('sss'));
bot.launch();
