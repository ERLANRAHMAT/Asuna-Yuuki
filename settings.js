/**
   * Made By Lann 🔖
   * Follow https://github.com/ERLANRAHMAT
   * Base Ori Visit Github ZEEONEOFC   
   * Here I just recode base dont bully me
   * Visit My Rest Api https://api.lannn.me
*/
const fs = require("fs");
const chalk = require("chalk");
const {
   indonesia
} = require("./language");

//=======> Free Api 
global.APIs = {   
   lann: 'https://api.lannn.me'
}

//buy apikey premium 085842647866
// Free apikey (silahkan login terus ganti Your Key dgn apikey lu)
global.APIKeys = {   
  'https://api.lannn.me': 'Your Key'
}

//language 
global.language = indonesia 
global.BOT_TOKEN = "-" //create bot here https://t.me/BotFather and get the bot token
global.BOT_NAME = "-" //your bot name
global.OWNER_NAME = "-" //your name
global.OWNER_NUMBER = "-" //your telegram number
global.OWNER = ["-", "-"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.THUMBNAIL = "./image/yuuki.jpg" // ini yuuki.jpg adalah nama foto di folder image. untuk foto bot
global.DONASI = "./image/donasi.jpg" // foto donasi di folder image
global.lang = language //don't change

//===> INI GAUSAH DIUBAH
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
