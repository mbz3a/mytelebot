const {Telegraf} = require("telegraf");
bot = new Telegraf('1960602083:AAE_Gf8uXYD9xzrQtZZMcwAV6RV0gUqVBtE');

bot.start(response => response.reply('sss'));
bot.launch();
