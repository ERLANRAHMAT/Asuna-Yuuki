require("./settings")
const {
Telegraf,
Context
} = require('telegraf')
const {
simple
} = require("./lib/myfunc")
const fs = require('fs')
const os = require('os')
const speed = require('performance-now')
const chalk = require("chalk");

if (BOT_TOKEN == 'YOUR_TELEGRAM_BOT_TOKEN') {
return console.log(lang.noToken)
}

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
...query,
...(apikeyqueryname ? {
[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]
} : {})
})) : '')

const bot = new Telegraf(BOT_TOKEN)
async function startlann() {
bot.on('callback_query', async (lann) => {
//console.log(lann)
action = lann.callbackQuery.data.split(' ')
args = action
user_id = Number(action[1])
if (lann.callbackQuery.from.id != user_id) return lann.answerCbQuery('Uppss... this button not for you!', {
show_alert: true
})
const timestampi = speed();
const latensii = speed() - timestampi
const user = simple.getUserName(lann.callbackQuery.from)
const {
isUrl,
fetchJson
} = simple
const pushname = user.full_name;
const username = user.username ? user.username : "zeeone_ofc";
const isCreator = [lann.botInfo.username, ...global.OWNER].map(v => v.replace("https://t.me/", '')).includes(user.username ? user.username : "-")
const reply = async (text) => {
for (var x of simple.range(0, text.length, 4096)) { //maks 4096 character, jika lebih akan eror
return await lann.replyWithMarkdown(text.substr(x, 4096), {
disable_web_page_preview: true
})
}
}
try {
switch (action[0]) {
case "menucmd": {
let hit_total;
try {
hit_total = await simple.fetchJson('https://api.countapi.xyz/hit/lann.herokuapp.com/visits')
} catch {
hit_total = {
value: "-"
}
}
hitall = `${hit_total.value == undefined ? '-' : hit_total.value}`
let dnew = new Date(new Date + 3600000)
let week = dnew.toLocaleDateString('en', {
weekday: 'long'
})
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(dnew / 84600000) % 5]
let date = dnew.toLocaleDateString('en', {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat('en' + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(dnew)
lang.menu(lann, THUMBNAIL, pushname, OWNER_NAME, OWNER, "/", hitall, latensii, os, simple, week, date, dateIslamic, username, isCreator, user.id.toString())
}
break

case "animecmd": {
lang.animecmd(lann, THUMBNAIL, user_id.toString())
}
break

case "asupancmd": {
lang.asupancmd(lann, THUMBNAIL, user_id.toString())
}
break

case "cecancmd": {
lang.cecancmd(lann, THUMBNAIL, user_id.toString())
}
break

case "downloadcmd": {
lang.downloadcmd(lann, THUMBNAIL, user_id.toString())
}
break

case "ephotocmd": {
lang.ephotocmd(lann, THUMBNAIL, user_id.toString())
}
break

case "islamcmd": {
lang.islamcmd(lann, THUMBNAIL, user_id.toString())
}
break

case "nsfwcmd": {
lang.nsfwcmd(lann, THUMBNAIL, user_id.toString())
}
break
case "photooxycmd": {
lang.photooxycmd(lann, THUMBNAIL, user_id.toString())
}
break

case "textprocmd": {
lang.textprocmd(lann, THUMBNAIL, user_id.toString())
}
break

case "owner": {
await lann.sendContact(OWNER_NUMBER, OWNER_NAME)
reply(`My Creator Bot [${OWNER_NAME}](${OWNER[0]}) 👑`)
}
break         

case "ownercmd": {
lang.ownercmd(lann, THUMBNAIL, user_id.toString())
}
break
     
}
} catch (e) {
console.log(e)
}
})
bot.command('help', async (lann) => {
user = simple.getUserName(lann.message.from)
await lann.reply(lang.first_chat(BOT_NAME, user.full_name), {
parse_mode: "MARKDOWN",
disable_web_page_preview: true,
reply_markup: {
inline_keyboard: [
[{
text: '📮 Base',
url: "https://github.com/zeeoneofficial/telebot"
}, 
{
text: '📮 Recode',
url: "https://github.com/ERLANRAHMAT/Asuna-Yuuki"
},{
text: '👦 Owner',
url: OWNER[0]
}]
]
}
})
})

bot.command('start', async (lann) => {
let user = simple.getUserName(lann.message.from)
await lann.reply(lang.first_chat(BOT_NAME, user.full_name), {
parse_mode: "MARKDOWN",
disable_web_page_preview: true,
reply_markup: {
inline_keyboard: [
[{
text: '📮 Base',
url: "https://github.com/zeeoneofficial/telebot"
}, 
{
text: '📮 Recode',
url: "https://github.com/ERLANRAHMAT/Asuna-Yuuki"
},{
text: '👦 Owner',
url: OWNER[0]
}]
]
}
})
})

bot.on('message', async (lann) => {
require("./index")(lann, bot)
})

bot.launch({
dropPendingUpdates: true
})

bot.telegram.getMe().then((getme) => {
console.table({
"Bot Name": getme.first_name,
"Username": "@" + getme.username,
"ID": getme.id,
"Link": `https://t.me/${getme.username}`,
"Author": "https://t.me/@zeeoneofc",
"Recode": "https://t.me/lannapii"
})
})
}
startlann()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

//===> INI GAUSAH DIUBAH
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
