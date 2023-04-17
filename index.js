require("./settings")
const {
Telegraf,
Context
} = require('telegraf')
const {
message,
editedMessage,
channelPost,
editedChannelPost,
callbackQuery
} = require("telegraf/filters");
const chalk = require('chalk')
const fs = require('fs')
const fetch = require('node-fetch')
const os = require('os')
const speed = require('performance-now')
const util = require('util')
const yts = require('yt-search')

const {
simple
} = require('./lib/myfunc')

module.exports = lann = async (lann, bot) => {
//console.log(lann)
try {
const body = lann.message.text || lann.message.caption || ''
const budy = (typeof lann.message.text == 'string' ? lann.message.text : '')
const {
isUrl,
getBuffer
} = simple
const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)
const prefix = isCmd ? body[0] : ''
const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const user = simple.getUserName(lann.message.from)
const pushname = user.full_name;
const user_id = lann.message.from.id + " "
const username = lann.message.from.username ? lann.message.from.username : "zeeone_ofc";
const isCreator = OWNER[0].replace("https://t.me/", '') == lann.update.message.from.username
const from = lann.message.chat.id

const isGroup = lann.chat.type.includes('group')
const groupName = isGroup ? lann.chat.title : ''

const isImage = lann.message.hasOwnProperty('photo')
const isVideo = lann.message.hasOwnProperty('video')
const isAudio = lann.message.hasOwnProperty('audio')
const isSticker = lann.message.hasOwnProperty('sticker')
const isContact = lann.message.hasOwnProperty('contact')
const isLocation = lann.message.hasOwnProperty('location')
const isDocument = lann.message.hasOwnProperty('document')
const isAnimation = lann.message.hasOwnProperty('animation')
const isMedia = isImage || isVideo || isAudio || isSticker || isContact || isLocation || isDocument || isAnimation
const quotedMessage = lann.message.reply_to_message || {}
const isQuotedImage = quotedMessage.hasOwnProperty('photo')
const isQuotedVideo = quotedMessage.hasOwnProperty('video')
const isQuotedAudio = quotedMessage.hasOwnProperty('audio')
const isQuotedSticker = quotedMessage.hasOwnProperty('sticker')
const isQuotedContact = quotedMessage.hasOwnProperty('contact')
const isQuotedLocation = quotedMessage.hasOwnProperty('location')
const isQuotedDocument = quotedMessage.hasOwnProperty('document')
const isQuotedAnimation = quotedMessage.hasOwnProperty('animation')
const isQuoted = lann.message.hasOwnProperty('reply_to_message')
const timestampi = speed();
const latensii = speed() - timestampi

const reply = async (text) => {
for (var x of simple.range(0, text.length, 4096)) { //maks 4096 character, jika lebih akan eror
return await lann.replyWithMarkdown(text.substr(x, 4096), {
disable_web_page_preview: true
})
}
}
const getStyle = (style_, style, style2) => {
listt = `${lang.getStyle(style, style2)}`
for (var i = 0; i < 300; i++) {
listt += '» `' + style_[i] + '`\n'
}
reply(listt)
}

//================[ Type Message ]=================\\
var typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = 'Image'
else if (isVideo) typeMessage = 'Video'
else if (isAudio) typeMessage = 'Audio'
else if (isSticker) typeMessage = 'Sticker'
else if (isContact) typeMessage = 'Contact'
else if (isLocation) typeMessage = 'Location'
else if (isDocument) typeMessage = 'Document'
else if (isAnimation) typeMessage = 'Animation'

//=================[ Push Message TobConsole ]==================\\
if (lann.message) {
console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(body || typeMessage)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname) + '\n' + chalk.blueBright('=> In'), chalk.green(isGroup ? groupName : 'Private Chat', lann.message.chat.id))
}
switch (command) {

//=============[ Main Menu ]==========\\
case "tes": {
reply("`I'm here`")
}
break

case 'owner':
case 'creator': {
await lann.sendContact(OWNER_NUMBER, OWNER_NAME)
reply(`My lord [${OWNER_NAME}](${OWNER[0]}) 👑`)
}
break

case 'sc':
case 'script':
case 'scrip': {
lann.reply("Source code this bot", {
reply_markup: {
inline_keyboard: [
[{
text: '📮 Base',
url: "https://github.com/zeeoneofficial/telebot"
}, 
{
text: '🔖 Recode',
url: "https://github.com/ERLANRAHMAT/Asuna-Yuuki"
},]
]
}
})
}
break

case "privacy":
case "snk":
case "rules": {
reply(lang.snk)
}
break

case 'menu':
case 'panel':
case 'help': {
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
lang.menu(lann, THUMBNAIL, pushname, OWNER_NAME, OWNER, prefix, hitall, latensii, os, simple, week, date, dateIslamic, username, isCreator, lann.message.from.id.toString())
}
break

case 'speedtest': {
reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
  let o
  try {
  o = await exec('python3 speed.py')
  } catch (e) {
  o = e
 } finally {
let { stdout, stderr } = o
if (stdout.trim()) reply(stdout)
if (stderr.trim()) reply(stderr)
}
}
break

//=============[ Anime Menu ]===========\\
case "asuna":
case "ana":
case "ayuzawa":
case "chitoge":
case "emilia":
case "erza":
case "hinata":
case "inori":
case "kaga":
case "mikasa":
case "naruto":
case "riyas-gremori":
case "sakura":
case "sagiri":
case "umaru":
case "loli":{
reply(lang.wait)
let ini_url = global.api('lann', '/api/anime/' + command, {}, 'apikey')
let res = await fetch(ini_url)
if (!res.ok) throw await res.text()
lann.replyWithPhoto({
url: ini_url
}, {
caption: lang.ok,
})
}
break

//==================[ Download Menu ]=============\\
case 'youtube':
case 'yt':
case 'ytv':
case 'mp4':
case 'ytmp4':
case 'ytshorts':
case 'ytshort': {
if (!text) return reply(`Kirim perintah:\n${prefix+command} link youtube\n\nContoh penggunaan:\n${prefix+command} https://youtu.be/kwop2Eg5QY4`)
if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link youtube\n\nContoh penggunaan:\n${prefix+command} https://youtu.be/kwop2Eg5QY4`)
if (!args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return reply(`Kirim perintah:\n${prefix+command} link youtube\n\nContoh penggunaan:\n${prefix+command} https://youtu.be/kwop2Eg5QY4`)
reply(lang.wait)                 
let res = await fetch(global.api('lann', '/api/download/ytmp4/2', {                 
url: args[0]
}, 'apikey'))                    
if (!res.ok) throw await res.text()
var result = await res.json()
var {                      
thumbnail,
title,
quality,
bytesize,
size,
tags,
url
} = result.result
if (size > 50000) { //batas download 50mb, tamabahin jika kurang (misal 100mb = 100000)
let key = "「 YOUTUBE VIDEO 」\n\n"                        
key += `🗯️ Title: ${title}\n`
key += `🔎 Quality: ${quality}\n`
key += `📮 Size: ${size}\n`
key += `📝 Tags: ${tags}\n`
key += `📩 Download: ${url}\n\n`
key += `Ukuran media melebihi batas, silahkan download sendiri melalui link di atas.`
await lann.replyWithPhoto({
url: thumbnail
}, {
caption: key
})
} else {
let key = "「 YOUTUBE VIDEO 」\n\n"                                            
key += `🗯️ Title: ${title}\n`
key += `🔎 Quality: ${quality}\n`
key += `📮 Size: ${size}\n`
key += `📝 Tags: ${tags}\n`
key += `📩 Download: ${url}\n\n`
key += `Silahkan download melalui link di atas jika media tidak di kirim`
await lann.replyWithPhoto({
url: thumbnail
}, {
caption: key
})
await lann.replyWithVideo({
url: url,                            
})
}
}
break

case 'ytshortsmp3':
case 'ytshortmp3':
case 'mp3':
case 'ytmp3': {
if (!text) return reply(`Kirim perintah:\n${prefix+command} link youtube\n\nContoh penggunaan:\n${prefix+command} https://youtu.be/kwop2Eg5QY4`)
if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link youtube\n\nContoh penggunaan:\n${prefix+command} https://youtu.be/kwop2Eg5QY4`)
if (!args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return reply(`Kirim perintah:\n${prefix+command} link youtube\n\nContoh penggunaan:\n${prefix+command} https://youtu.be/kwop2Eg5QY4`)
reply(lang.wait)
// await lann.deleteMessage()
let res = await fetch(global.api('lann', '/api/download/ytmp4/2', {                 
url: args[0]
}, 'apikey'))                    
if (!res.ok) throw await res.text()
var result = await res.json()
var {                      
thumbnail,
title,
quality,
bytesize,
size,
tags,
url
} = result.result
if (size > 50000) { //batas download 50mb, tamabahin jika kurang (misal 100mb = 100000)
let key = "「 YOUTUBE AUDIO 」\n\n"                        
key += `🗯️ Title: ${title}\n`
key += `🔎 Quality: ${quality}\n`
key += `📮 Size: ${size}\n`
key += `📝 Tags: ${tags}\n`
key += `📩 Download: ${url}\n\n`
key += `Ukuran media melebihi batas, silahkan download sendiri melalui link di atas.`
await lann.replyWithPhoto({
url: thumbnail
}, {
caption: key
})
} else {
let key = "「 YOUTUBE AUDIO 」\n\n"
key = "「 YOUTUBE AUDIO 」\n\n"                        
key += `🗯️ Title: ${title}\n`
key += `🔎 Quality: ${quality}\n`
key += `📮 Size: ${size}\n`
key += `📝 Tags: ${tags}\n`
key += `📩 Download: ${url}\n\n`
key += `Silahkan download melalui link di atas jika media tidak di kirim`
await lann.replyWithPhoto({
url: thumbnail
}, {
caption: key
})
await lann.replyWithAudio({
url: url,   
filename: title                         
})
}
}
break

case 'yts':
case 'ytsearch': {
if (!text) return reply(`Kirim perintah:\n${prefix+command} judul lagu/video\n\nContoh penggunaan:\n${prefix+command} Dj Dalinda `)
reply(lang.wait)
let res = await fetch(global.api('lann', '/api/search/yts', {
query: text
}, 'apikey'))
if (!res.ok) throw await res.text()
var result = await res.json()
let dapet = result.result
var tbuff = dapet[0].thumbnail
cap = "「 YOUTUBE SEARCH 」\n\n"
for (let v = 0; v < 2; v++) {
cap += `🆔 ID : ${dapet[v].videoId}
💬 Title : ${dapet[v].title}
📺 Views : ${dapet[v].views}
⏰ Duration : ${dapet[v].duration}
▶️ Channel : ${ dapet[v].author.name} : ${dapet[v].author.url}
📆 Upload : ${dapet[v].published_at}
🔗 URL Video : ${dapet[v].url}
📝 Description : ${dapet[v].description}\n\n---------------------------\n\n`
}
lann.replyWithPhoto({
url: tbuff
}, {
caption: cap
})
}
break
break

case 'igphoto':
case 'instaphoto':
case 'instafoto':
case 'igfoto':
case "ig":
case "igdl": {
if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link Instagram\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/p/ClU74LNpgaw/?igshid=YmMyMTA2M2Y=`)
if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link Instagram\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/p/ClU74LNpgaw/?igshid=YmMyMTA2M2Y=`)
reply(lang.wait)
let res = await fetch(global.api('lann', '/api/download/igdowloader', {
url: args[0]
}, 'apikey'))
if (!res.ok) throw await res.text()
var result = await res.json()
var i = result.result
if (i.type.includes("mp4")) {
lann.replyWithVideo({
url: i.url
}, {
caption: lang.ok
})
} else {
lann.replyWithPhoto({
url: i.url
}, {
caption: lang.ok
})
}
}
break

case 'igvideo':
case 'instavideo':
case 'instavid':
case 'igreels':
case 'instareels':
case 'instareel': {
if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link Instagram video/reels\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/reel/CnVwm3KrQRl/?igshid=YmMyMTA2M2Y=`)
if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link Instagram video/reels\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/reel/CnVwm3KrQRl/?igshid=YmMyMTA2M2Y=`)
reply(lang.wait)
let res = await fetch(global.api('lann', '/api/download/igdowloader', {
url: args[0]
}, 'apikey'))
if (!res.ok) throw await res.text()
var result = await res.json()
var igv = result.result.url
lann.replyWithVideo({
url: igv
}, {
caption: lang.ok
})
}
break

case "mf":
case "mediafire": {
if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link mediafire\n\nContoh penggunaan:\n${prefix+command} https://www.mediafire.com/file/v035jsup2d2wp1n/textprome.js/file`)
if (!isUrl(args[0]) && !args[0].includes("mediafire.com")) return reply(`Kirim perintah:\n${prefix+command} link MediaFire\n\nContoh penggunaan:\n${prefix+command} https://www.mediafire.com/file/v035jsup2d2wp1n/textprome.js/file`)
reply(lang.wait)
let res = await fetch(global.api('lann', '/api/download/mediafire', {
url: args[0]
}, 'apikey'))
if (!res.ok) throw await res.text()
var result = await res.json()
var {
filename,
filetype,
filesizeH,
filesize,
ext,
url
} = result.result//[0]
console.log(filesizeH)
if (size > 30000) { //batas download 50mb, tamabahin jika kurang (misal 100mb = 100000)
//if (size.replace('MB', '') >= 100 || filesize.replace('GB', '') >= 1) { //size edit sendiri jika mau download yang lebih media yang lebih besar
var key = `「 Mediafire Download 」\n\n`
key += `📮 Nama: ${filename}\n`
key += `❄️ Tipe: ${filetype}\n`
key += `🔖 Size: ${filesizeH}\n`
key += `🔗 Link: ${url}\n\n`
key += `Untuk size lebih dari batas, silahkan download melalui link diatas.`
reply(key)
} else {
var key = `「 Mediafire Download 」\n\n`
key += `📮 Nama: ${filename}\n`
key += `❄️ Tipe: ${filetype}\n`
key += `🔖 Size: ${filesizeH}\n`
key += `🔗 Link: ${url}\n\n`
key += `⌛ Media dalam proses pengiriman, membutuhkan waktu sekitar beberapa menit/jam silahkan di tunggu.`
await reply(key)
lann.replyWithDocument({
url: url,
filename: filename
})

}
}
break

case "tiktoknowm":
case "tiktok": {
if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vm.tiktok.com/ZGJAmhSrp/`)
if (!isUrl(args[0]) && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vm.tiktok.com/ZGJAmhSrp/`)
reply(lang.wait)
let res = await fetch(global.api('lann', '/api/download/tiktok', {
url: args[0]
}, 'apikey'))
if (!res.ok) throw await res.text()
var result = await res.json()
var result = result.result
lann.replyWithVideo({
url: result.video_HD
}, {
caption: lang.ok
})
}
break

case "tiktokaudio": {
if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vm.tiktok.com/ZGJAmhSrp/`)
if (!isUrl(args[0]) && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vm.tiktok.com/ZGJAmhSrp/`)
reply(lang.wait)
let res = await fetch(global.api('lann', '/api/download/tiktok', {
url: args[0]
}, 'apikey'))
if (!res.ok) throw await res.text()
var result = await res.json()
var result = result.result
lann.replyWithAudio({
url: result.audio,
filename: "Tiktok Audio.mp3"
})
}
break

//=================[ Ephoto360 ]=============\\
case "ytgold": 
if (!text) return reply(`Example : ${prefix + command} Lann`) 
reply(lang.wait)
let ini_url = global.api('lann', '/api/ephoto/ytgoldbutton', {
text: text
}, 'apikey')
let res = await fetch(ini_url)
if (!res.ok) throw await res.text()
lann.replyWithPhoto({
url: ini_url
}, {
caption: lang.ok
})
break

case "ytsilver":
if (!text) return reply(`Example : ${prefix + command} Lann`) 
reply(lang.wait)
let ini_url1 = global.api('lann', '/api/ephoto/ytsilverbutton', {
text: text
}, 'apikey')
let ress = await fetch(ini_url1)
if (!ress.ok) throw await ress.text()
lann.replyWithPhoto({
url: ini_url1
}, {
caption: lang.ok
})
break

case "iggold": 
if (!text) return reply(`Example : ${prefix + command} Lann`) 
reply(lang.wait)
let ini_url2 = global.api('lann', '/api/ephoto/iggoldbutton', {
text: text
}, 'apikey')
let resss = await fetch(ini_url2)
if (!resss.ok) throw await resss.text()
lann.replyWithPhoto({
url: ini_url2
}, {
caption: lang.ok
})
break

case 'igsilver': 
if (!text) return reply(`Example : ${prefix + command} Lann`) 
reply(lang.wait)
let ini_url3 = global.api('lann', '/api/ephoto/igsilverbutton', {
text: text
}, 'apikey')
let ressss = await fetch(ini_url3)
if (!ressss.ok) throw await ressss.text()
lann.replyWithPhoto({
url: ini_url3
}, {
caption: lang.ok
})
break

case 'fbgold': 
if (!text) return reply(`Example : ${prefix + command} Lann`) 
reply(lang.wait)
let ini_url4 = global.api('lann', '/api/ephoto/fbgoldbutton', {
text: text
}, 'apikey')
let re = await fetch(ini_url4)
if (!re.ok) throw await re.text()
lann.replyWithPhoto({
url: ini_url4
}, {
caption: lang.ok
})
break

case 'fbsilver': 
if (!text) return reply(`Example : ${prefix + command} Lann`) 
reply(lang.wait)
let ini_url5 = global.api('lann', '/api/ephoto/fbsilverbutton', {
text: text
}, 'apikey')
let sil = await fetch(ini_url5)
if (!sil.ok) throw await sil.text()
lann.replyWithPhoto({
url: ini_url5
}, {
caption: lang.ok
})
break

case 'twtgold': 
if (!text) return reply(`Example : ${prefix + command} Lann`) 
reply(lang.wait)
let ini_url6 = global.api('lann', '/api/ephoto/twtgoldbutton', {
text: text
}, 'apikey')
let ver = await fetch(ini_url6)
if (!ver.ok) throw await ver.text()
lann.replyWithPhoto({
url: ini_url6
}, {
caption: lang.ok
})
break

case 'twtsilver': 
if (!text) return reply(`Example : ${prefix + command} Lann`) 
reply(lang.wait)
let ini_url7 = global.api('lann', '/api/ephoto/twtsilverbutton', {
text: text
}, 'apikey')
let gol = await fetch(ini_url7)
if (!gol.ok) throw await gol.text()
lann.replyWithPhoto({
url: ini_url7
}, {
caption: lang.ok
})
break

case 'televisi': 
case 'glasses': 
case 'blackpink': 
case 'blackpink2':
case 'coverpubg': 
case 'greenbrush': 
case 'eraser': 
case 'dragonfire': 
case 'incandescent': 
case 'typography': 
case 'typography2': 
case 'cloth': 
case 'grafitti':
case 'galaxy': 
case 'blueneon': 
case 'nightstars': 
case 'cloud': 
case 'papercut':
case 'horor':
case 'sunlight': 
case 'pig': 
if (!text) return reply(`Example : ${prefix + command} Lann`) 
reply(lang.wait)
let ini_urll = global.api('lann', '/api/ephoto/' + command, {
text: text
}, 'apikey')
let pig = await fetch(ini_urll)
if (!pig.ok) throw await pig.text()
lann.replyWithPhoto({
url: ini_urll
}, {
caption: lang.ok
})
break

//==============[ Islamic Menu ]==========\\
case 'asmaulhusna': {
var asma = await fetch(api('lann', '/api/muslim/' + command, {}, 'apikey'))
if (!asma.ok) throw asma.text()
var dataa = await asma.json()
var data = dataa.result
//for (let i of data.result) {
for (let i = 0; i < 15;i++) {
key += `
👳 Asmaul Husna
🇦 Latin : ${data[i].latin}\n
🇸🇦 Arabic : ${data[i].arab}\n
🇮🇩 Tr id : ${data[i].translate_id}\n
🇬🇧 Tr en : ${data[i].translate_en}\n\n==========================\n\n`
}
console.log(key)
reply(key)
}
break

case 'kisahnabi': {
if (!text) return reply(`Kirim perintah:\n${prefix+command} nama nabi\n\nContoh penggunaan:\n${prefix+command} Adam`)
var asma = await fetch(api('lann', '/api/muslim/' + command, {
nabi: q
}, 'apikey'))
if (!asma.ok) throw asma.text()
var data = await asma.json()
let key = '👳 Kisah Nabi\n\n'
key += `👳 Name : ${data.result.name}\n`
key += `🇸🇦 Kelahiran : ${data.result.kelahiran}\n`
key += `⚰️ Death Age : ${data.result.wafat_usia}\n`
key += `🏡 Country : ${data.result.singgah}\n`
key += `🗯️ Story : ${data.result.kisah}\n`
reply(key)
}
break

//==================[ Photooxy Menu ]===================\\
case 'bevel-text':
case 'luxury':
case 'flaming':
case 'underwater':
case 'shadow-sky':
case 'wolf-metal':
case 'metallic':
case 'metallic2':
case 'burn-paper':
case 'naruto':
case '3d-summer':
case 'under-grass':
case 'smoke':
case 'flower-typography':
case 'picture-of-love':
case 'hello-kitty':
case 'coffe-cup':
case 'butterfly':
case 'night-sky':
case 'carved-wood':
case 'sweet-candy': {
if (!text) return reply(`Example : ${prefix + command} Lann`) 
reply(lang.wait)
let ini_url = global.api('lann', '/api/photooxy/' + command, {
text1: text
}, 'apikey')
let res = await fetch(ini_url)
if (res.status != 200) throw await res.text()
lann.replyWithPhoto({
url: ini_url
}, {
caption: lang.ok
})
}
break
//==============[ Textpro ]============\\
case 'art-papper':
case 'black-pink':
case 'black-pink2':
case 'broken-glass':
case 'christmas':
case 'deluxe-silver':
case 'drop-water':
case 'engraved':
case 'fabric':
case 'glue-text':
case 'glossy':
case 'grafity-text':
case 'holograpic':
case 'honey':
case 'horor-blood':
case 'ice':
case 'larva':
case 'magma':
case 'multi-color':
case 'neon-devil':
case 'neon-galaxy':
case 'neon-green':
case 'neon-light':
case 'neon-online':
case 'girrafe':
case 'robot':
case 'rusty':
case 'sky-text':
case 'stroberi':
case 'toxic-bokeh':
case 'wicker':
case 'writing':
case '3d-gradient ':{
if (!text) return reply(`Example : ${prefix + command} Lann`) 
reply(lang.wait)
let ini_url = global.api('lann', '/api/textpro/' + command, {
text: text
}, 'apikey')
let res = await fetch(ini_url)
if (res.status != 200) throw await res.text()
lann.replyWithPhoto({
url: ini_url
}, {
caption: lang.ok
})
}
break

//=========[ Owner Menu ]=========\\
case 'getcase': case 'c': 
if (!isCreator) return reply(lang.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("./index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply(`${getCase(q)}`)
.catch((err) => reply(lang.error))
break

default:
}
} catch (e) {
lann.reply(util.format(e))
console.log('[ ERROR ] ' + e)
}
}

//===> INI GAUSAH DIUBAH
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
